#!/usr/bin/env node
// Validate gate YAML files:
//  - All referenced notes exist as .md files in repo root
//  - All goto/leaf ids resolve within the gate
//  - No question has > 5 options (4 + "모름")
//  - Leaves have required exits fields
//  - Subgates exist as files

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const GATES_DIR = join(ROOT, 'gates');

const mdFiles = new Set(
  readdirSync(ROOT).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3))
);
const gateFiles = readdirSync(GATES_DIR).filter(f => f.endsWith('.yaml'));
const gateIds = new Set(gateFiles.map(f => f.slice(0, -5)));

const NOTE_PREFIXES = /^(concept|process|source|faq|section|hub|newcomer-path|practitioner-path)-/;

let errors = 0;
const err = (gate, msg) => { console.error(`✗ ${gate}: ${msg}`); errors++; };

for (const file of gateFiles) {
  const gate = parse(readFileSync(join(GATES_DIR, file), 'utf8'));
  const gateName = file.slice(0, -5);

  const nodes = gate.nodes || {};
  const leaves = gate.leaves || {};
  const nodeIds = new Set(Object.keys(nodes));
  const leafIds = new Set(Object.keys(leaves));

  const resolveTarget = (t) => {
    if (t == null) return true;
    if (t === 'root') return true;
    if (nodeIds.has(t) || leafIds.has(t)) return true;
    if (gateIds.has(t)) return true;                // subgate
    if (NOTE_PREFIXES.test(t)) return mdFiles.has(t); // direct note reference
    return false;
  };

  const checkOptions = (ctx, opts, max = 5) => {
    if (!Array.isArray(opts)) return err(gateName, `${ctx}: options not array`);
    if (opts.length > max) err(gateName, `${ctx}: ${opts.length} options (>${max})`);
    for (const o of opts) {
      const t = o.goto ?? o.leaf;
      if (!t) err(gateName, `${ctx}: option "${o.label}" missing goto/leaf`);
      else if (!resolveTarget(t)) err(gateName, `${ctx}: unresolved target "${t}"`);
    }
  };

  if (gate.entry_question) checkOptions('entry_question', gate.entry_question.options, 10);

  for (const [id, node] of Object.entries(nodes)) {
    checkOptions(`node.${id}`, node.options);
  }

  for (const [id, leaf] of Object.entries(leaves)) {
    if (!Array.isArray(leaf.notes)) err(gateName, `leaf.${id}: notes not array`);
    else for (const n of leaf.notes) {
      if (!mdFiles.has(n)) err(gateName, `leaf.${id}: note "${n}.md" not found`);
    }
    if (!leaf.exits) err(gateName, `leaf.${id}: missing exits`);
    else for (const [k, v] of Object.entries(leaf.exits)) {
      if (v != null && !resolveTarget(v)) err(gateName, `leaf.${id}.exits.${k}: unresolved "${v}"`);
    }
  }

  for (const sg of gate.subgates || []) {
    if (!gateIds.has(sg)) err(gateName, `subgate "${sg}" not found`);
  }
}

if (errors) {
  console.error(`\n${errors} error(s) across ${gateFiles.length} gate files`);
  process.exit(1);
}
console.log(`✓ all gates valid (${gateFiles.length} files)`);
