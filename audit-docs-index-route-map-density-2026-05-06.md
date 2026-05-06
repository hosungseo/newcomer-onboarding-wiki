# docs/index.html route-map density audit — 2026-05-06

Scope: read-only audit of `docs/index.html`; no edits to `docs/index.html`, `README.md`, landing files, graph/data files, coverage/manifest/quality files.

## Findings
- `docs/index.html` currently has 6 sections and 72 Markdown quick links.
- Longest quick-link block: `예산대응·민원대응 실행경계` at `docs/index.html:48-73` with 21 links. It mixes route-map, budget, procurement-overlap, civil-complaint process/checklist/FAQ/source links in one dense list.
- Second longest block: `정보공개·기록관리/협업회의 실행경계` at `docs/index.html:13-32` with 15 links. It has a clear router/path/walkthrough start, but then blends two domains in a single list.
- Route-map entries exist at:
  - `docs/index.html:16` router: `router-정보공개기록관리-협업회의-신규자-공개경계.md`
  - `docs/index.html:18` route-map walkthrough: `walkthrough-정보공개기록관리-협업회의-실행경계-라우트맵-2026-05.md`
  - `docs/index.html:51` route-map walkthrough: `walkthrough-예산대응-민원대응-실행경계-라우트맵-2026-05.md`
  - `docs/index.html:91` and `docs/index.html:108` duplicate cross-domain route-map: `walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05.md`
- Duplicate quick links are intentional-looking cross-domain overlaps, but they increase density:
  - `newcomer-path-예산대응-계약조달-첫흐름.md` appears in 계약조달 and 예산대응·민원대응 blocks.
  - `source-예산대응-공개자료-대조순서.md`, `process-예산대응-요구자료-작성흐름.md`, and `checklist-예산대응-요구자료-제출전검토.md` also appear in both blocks.
  - `walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05.md` appears in both 홍보대응 and 법령대응 blocks.
- Link integrity check: all 72 `../*.md` links in `docs/index.html` resolve to existing root files; missing count 0.

## Consolidation recommendations
1. Split the 21-link `예산대응·민원대응 실행경계` block into two visible subsequences or two sections: 예산대응 and 민원대응. Keep `walkthrough-예산대응-민원대응-실행경계-라우트맵-2026-05.md` as the shared first bridge rather than repeating all lower-level material in one block.
2. Treat duplicated overlap links as bridge links, not full repeated route chains. For example, keep `newcomer-path-예산대응-계약조달-첫흐름.md` in 계약조달 and only one concise “예산 bridge” item in the 예산 block.
3. For cross-domain route maps, keep `walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05.md` in the section where users most naturally start, and use one reciprocal pointer in the other section instead of a second full route-map entry.
4. Prefer each section’s top 3 entries to follow a stable pattern: router/path or walkthrough → primary process → primary checklist. FAQ/source links can follow after that, grouped by domain.

## Validation
- Touched file: `audit-docs-index-route-map-density-2026-05-06.md`.
- No Obsidian-style wikilinks were added, so touched-file wikilink missing refs are not applicable.
- `docs/index.html` was audited but not modified.
