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

const files = readdirSync(GATES).filter(f => f.endsWith('.yaml'));
const entries = [];
for (const f of files) {
  const src = join(GATES, f);
  copyFileSync(src, join(DOCS_GATES, f));
  const g = parse(readFileSync(src, 'utf8'));
  entries.push({
    file: f,
    id: g.id,
    version: g.version,
    trigger: g.trigger || '',
    isSubgate: /심화|advanced/i.test(f),
    entryOptions: (g.entry_question?.options?.length) || 0,
    leafCount: Object.keys(g.leaves || {}).length,
  });
}
entries.sort((a, b) => a.id.localeCompare(b.id, 'ko'));
writeFileSync(INDEX, JSON.stringify({ version: new Date().toISOString().slice(0,10), gates: entries }, null, 2));
console.log(`✓ built ${entries.length} gate entries → docs/gates.json and docs/gates/*.yaml`);
