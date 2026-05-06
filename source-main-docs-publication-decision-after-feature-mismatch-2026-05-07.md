# Source — Safe `main:/docs` publication decision after feature-branch mismatch (2026-05-07)

## Atomic claim

After `feature/search-priority-feedback-v2` and GitHub Pages disagree, the safe publication decision is a branch-source decision: publish only the reviewed public `docs/` artifact to `main:/docs`, then judge the live site from the rebuilt `main` artifact.

## Evidence boundary

A live gateway title can prove that Pages is serving an older artifact, but it cannot prove the feature branch is wrong. The decision boundary is therefore:

- feature branch evidence answers “what is ready to promote?”
- `main:/docs` evidence answers “what can Pages publish now?”
- live HTML evidence answers “what did Pages actually serve?”

Only when those three agree should the result be called live-complete.

## Existing anchors

- [[source-pages-main-docs-publication-boundary-2026-05-07]]
- [[source-pages-live-response-verification-boundary-2026-05-07]]
- [[process-pages-source-branch-triage-2026-05-07]]

## Stop / forbidden lines

- STOP: Do not collapse feature branch readiness, `main:/docs` publication state, and live Pages response into one signal.
- STOP: If any of the three signals disagree, record the exact mismatch and defer publication judgment until the source artifact is explicit.
- FORBIDDEN: commit, push, merge, force-publish, edit `docs/`, edit existing notes, delete files, or alter GitHub Pages configuration from this source note.
- FORBIDDEN: disclose credentials, tokens, cookies, private repository settings, non-public personnel/budget/audit/security material, legal conclusions, or unverified operational claims.
