#!/usr/bin/env node
// Build docs/gates.json — static index of all gates (avoids GitHub API rate limit).
// Also builds docs/gates/*.yaml copies so Pages serves them same-origin.
import { readFileSync, readdirSync, writeFileSync, mkdirSync, copyFileSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const GATES = join(ROOT, 'gates');
const DOCS_GATES = join(ROOT, 'docs', 'gates');
const INDEX = join(ROOT, 'docs', 'gates.json');

if (existsSync(DOCS_GATES)) rmSync(DOCS_GATES, { recursive: true });
mkdirSync(DOCS_GATES, { recursive: true });

// Priority order: curated for newcomers. Lower index = shown first.
const PRIORITY = [
  'gate-임용후첫달',
  'gate-첫문서처리',
  'gate-첫급여',
  'gate-첫인사복무와문서처리',
  'gate-첫출장정산',
  'gate-첫휴직승진출장교육',
  'gate-첫승진',
  'gate-첫연금',
  'gate-첫재해보상',
  'gate-첫복귀',
  'gate-첫교육훈련',
  'gate-민원응대',
  'gate-정보공개청구',
  'gate-조달계약',
  'gate-정부입법',
  'gate-예산이해',
];

const files = readdirSync(GATES).filter(f => f.endsWith('.yaml'));
const entries = [];
for (const f of files) {
  const src = join(GATES, f);
  copyFileSync(src, join(DOCS_GATES, f));
  const g = parse(readFileSync(src, 'utf8'));

  // Build searchable text: trigger + entry options + node questions + leaf ids
  const searchParts = [g.id, g.trigger || ''];
  for (const o of g.entry_question?.options || []) searchParts.push(o.label || '');
  for (const [nid, n] of Object.entries(g.nodes || {})) {
    searchParts.push(n.question || '');
    for (const o of n.options || []) searchParts.push(o.label || '');
  }
  for (const lid of Object.keys(g.leaves || {})) searchParts.push(lid);

  const isSubgate = /심화|advanced/i.test(f);
  const prio = PRIORITY.indexOf(g.id);
  entries.push({
    file: f,
    id: g.id,
    version: g.version,
    trigger: g.trigger || '',
    isSubgate,
    entryOptions: (g.entry_question?.options?.length) || 0,
    leafCount: Object.keys(g.leaves || {}).length,
    priority: prio >= 0 ? prio : 999,
    searchText: searchParts.join(' ').toLowerCase(),
  });
}
entries.sort((a, b) => {
  if (a.priority !== b.priority) return a.priority - b.priority;
  return a.id.localeCompare(b.id, 'ko');
});
writeFileSync(INDEX, JSON.stringify({ version: new Date().toISOString().slice(0,10), gates: entries }, null, 2));
console.log(`✓ built ${entries.length} gate entries → docs/gates.json and docs/gates/*.yaml`);
