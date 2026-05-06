# quality gate — GitHub Pages source branch mismatch

## Gate result

**PASS as source-branch mismatch classification.**

## Checks

- [x] GitHub Pages API checked.
- [x] Pages status recorded as `built`.
- [x] Pages source recorded as `main:/docs`.
- [x] Feature branch recorded as `feature/search-priority-feedback-v2`.
- [x] `origin/main` and feature `docs/index.html` titles compared.
- [x] Live response checked for title/byte mismatch.
- [x] Live mismatch classified as source-branch mismatch, not content FAIL.
- [x] No commit or push performed in this lane.

## Evidence summary

Pages is configured to publish from `main:/docs`. The current route-index content lives on `feature/search-priority-feedback-v2`, while `origin/main:docs/index.html` still has the gateway title. Therefore live HTTP 200 with gateway title is consistent with the configured Pages source.

## Guardrail

Treat further live checks as deployment/source-state checks until the feature branch is merged or Pages source changes. Do not add repeated content FAIL notes while the configured source still points at `main:/docs`.
