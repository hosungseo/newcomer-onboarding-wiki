#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'docs', 'graph-data.json');
const EXCLUDED_DIRS = new Set(['.git', '.github', 'docs', 'scripts', 'tests', 'node_modules']);

function walkMd(dir, rel = '') {
  const abs = rel ? path.join(dir, rel) : dir;
  const entries = readdirSync(abs, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryRel = rel ? path.posix.join(rel, entry.name) : entry.name;
    if (entry.isDirectory()) {
      if (EXCLUDED_DIRS.has(entry.name)) continue;
      files.push(...walkMd(dir, entryRel));
      continue;
    }
    if (!entry.isFile()) continue;
    if (!entry.name.endsWith('.md')) continue;
    files.push(entryRel);
  }
  return files;
}

function normalizeRel(p) {
  return p.split(path.sep).join('/');
}

function stripMd(filename) {
  return filename.replace(/\.md$/i, '');
}

function classify(rel) {
  const base = path.posix.basename(rel, '.md');
  if (rel.startsWith('raw/')) return 'raw';
  if (base === 'README') return 'readme';
  if (base.startsWith('concept-')) return 'concept';
  if (base.startsWith('process-')) return 'process';
  if (base.startsWith('source-')) return 'source';
  if (base.startsWith('faq-')) return 'faq';
  if (base.startsWith('hub-')) return 'hub';
  if (base.startsWith('newcomer-path-')) return 'path';
  if (base.startsWith('section-')) return 'section';
  if (base.startsWith('gate-')) return 'gate';
  if (base.startsWith('link-manifest-')) return 'manifest';
  if (base.startsWith('source-scouting-')) return 'scouting';
  return 'note';
}

function extractTitle(text, rel) {
  const heading = text.match(/^#\s+(.+)$/m);
  if (heading) return heading[1].trim();
  return path.posix.basename(rel, '.md');
}

function extractSummary(text) {
  const lines = text
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .filter(line => !line.startsWith('#'))
    .filter(line => !line.startsWith('- type:'))
    .filter(line => !line.startsWith('- institution:'))
    .filter(line => !line.startsWith('- source page:'))
    .filter(line => !line.startsWith('- reference year:'));
  return (lines[0] || '').replace(/`/g, '').slice(0, 180);
}

function slugify(rel) {
  return stripMd(path.posix.basename(rel));
}

const mdFiles = walkMd(ROOT).map(normalizeRel).sort((a, b) => a.localeCompare(b, 'ko'));
const nodes = mdFiles.map(rel => {
  const abs = path.join(ROOT, rel);
  const text = readFileSync(abs, 'utf8');
  const stat = statSync(abs);
  return {
    id: rel,
    path: rel,
    slug: slugify(rel),
    file: path.posix.basename(rel),
    title: extractTitle(text, rel),
    summary: extractSummary(text),
    kind: classify(rel),
    isRaw: rel.startsWith('raw/'),
    dir: path.posix.dirname(rel),
    size: stat.size,
    mtime: stat.mtime.toISOString(),
    text,
  };
});

const nodeById = new Map(nodes.map(node => [node.id, node]));
const basenameMap = new Map();
for (const node of nodes) {
  const key = stripMd(node.file);
  if (!basenameMap.has(key)) basenameMap.set(key, []);
  basenameMap.get(key).push(node.id);
}

function preferTarget(candidates) {
  if (!candidates.length) return null;
  if (candidates.length === 1) return candidates[0];
  const ranked = [...candidates].sort((a, b) => {
    const nodeA = nodeById.get(a);
    const nodeB = nodeById.get(b);
    const rawBias = Number(nodeA?.isRaw) - Number(nodeB?.isRaw);
    if (rawBias !== 0) return rawBias;
    const depthBias = a.split('/').length - b.split('/').length;
    if (depthBias !== 0) return depthBias;
    return a.localeCompare(b, 'ko');
  });
  return ranked[0];
}

function resolveTarget(ref, sourceId) {
  let cleaned = ref.trim();
  if (!cleaned) return null;
  cleaned = cleaned.replace(/^['"]|['"]$/g, '');
  cleaned = cleaned.replace(/\\/g, '/');
  cleaned = cleaned.replace(/[?#].*$/, '');
  cleaned = cleaned.replace(/^<|>$/g, '');

  if (/^https?:\/\//i.test(cleaned)) return null;

  const sourceDir = path.posix.dirname(sourceId);
  const candidates = [];

  if (cleaned.endsWith('.md')) {
    if (cleaned.startsWith('/')) {
      const absCandidate = cleaned.replace(/^\/+/, '');
      if (nodeById.has(absCandidate)) candidates.push(absCandidate);
    } else {
      const relCandidate = path.posix.normalize(path.posix.join(sourceDir, cleaned));
      if (nodeById.has(relCandidate)) candidates.push(relCandidate);
      const rootCandidate = path.posix.normalize(cleaned);
      if (nodeById.has(rootCandidate)) candidates.push(rootCandidate);
      const baseKey = stripMd(path.posix.basename(cleaned));
      const baseHits = basenameMap.get(baseKey) || [];
      candidates.push(...baseHits);
    }
  } else {
    const wikilinkKey = cleaned.split('|')[0].split('#')[0].trim();
    const hits = basenameMap.get(wikilinkKey) || [];
    candidates.push(...hits);
  }

  const target = preferTarget([...new Set(candidates)]);
  if (!target || target === sourceId) return null;
  return target;
}

function extractRefs(node) {
  const refs = [];
  const text = node.text;

  for (const match of text.matchAll(/\[\[([^\]]+)\]\]/g)) {
    const resolved = resolveTarget(match[1], node.id);
    if (resolved) refs.push({ target: resolved, type: 'wikilink' });
  }

  for (const match of text.matchAll(/\[[^\]]+\]\(([^)]+\.md[^)]*)\)/g)) {
    const resolved = resolveTarget(match[1], node.id);
    if (resolved) refs.push({ target: resolved, type: 'md-link' });
  }

  for (const match of text.matchAll(/`([^`\n]+\.md)`/g)) {
    const resolved = resolveTarget(match[1], node.id);
    if (resolved) refs.push({ target: resolved, type: 'backtick-ref' });
  }

  return refs;
}

const edgeMap = new Map();
for (const node of nodes) {
  const refs = extractRefs(node);
  for (const ref of refs) {
    const key = `${node.id}=>${ref.target}`;
    if (!edgeMap.has(key)) {
      edgeMap.set(key, {
        source: node.id,
        target: ref.target,
        type: ref.type,
      });
    }
  }
}

const links = [...edgeMap.values()];
const inbound = new Map();
const outbound = new Map();
for (const link of links) {
  outbound.set(link.source, (outbound.get(link.source) || 0) + 1);
  inbound.set(link.target, (inbound.get(link.target) || 0) + 1);
}

const payload = {
  generatedAt: new Date().toISOString(),
  repo: 'hosungseo/newcomer-onboarding-wiki',
  stats: {
    nodes: nodes.length,
    links: links.length,
    rawNodes: nodes.filter(node => node.isRaw).length,
  },
  nodes: nodes.map(node => ({
    id: node.id,
    path: node.path,
    slug: node.slug,
    file: node.file,
    title: node.title,
    summary: node.summary,
    kind: node.kind,
    isRaw: node.isRaw,
    degreeIn: inbound.get(node.id) || 0,
    degreeOut: outbound.get(node.id) || 0,
    degree: (inbound.get(node.id) || 0) + (outbound.get(node.id) || 0),
  })),
  links,
};

writeFileSync(OUT, JSON.stringify(payload, null, 2));
console.log(`✓ built graph data → docs/graph-data.json (${payload.stats.nodes} nodes / ${payload.stats.links} links)`);
