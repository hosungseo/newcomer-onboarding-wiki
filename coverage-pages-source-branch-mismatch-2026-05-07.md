# coverage — GitHub Pages source branch mismatch

## Coverage target

GitHub Pages live/local mismatch after `docs/index.html` route-index restoration.

## Covered evidence

- Pages config evidence captured with `gh api repos/hosungseo/newcomer-onboarding-wiki/pages`:
  - `status`: `built`
  - `source.branch`: `main`
  - `source.path`: `/docs`
- Branch evidence:
  - local branch: `feature/search-priority-feedback-v2`
  - `origin/main:docs/index.html` title: `신규공무원 적응 위키 · 관문`
  - feature `docs/index.html` title: `Execution Boundary Route Index`
- Live response evidence:
  - URL: `https://hosungseo.github.io/newcomer-onboarding-wiki/`
  - HTTP: `200`
  - bytes: about `31241`
  - gateway title present: yes
  - route-index title present: no

## Coverage conclusion

The mismatch is fully covered as **Pages source branch/path evidence**. Because Pages is built from `main:/docs` and the route index is currently on `feature/search-priority-feedback-v2`, live gateway content is expected. This lane must not classify the mismatch as content failure.

## Linked gate

- [[quality-gate-pages-source-branch-mismatch-2026-05-07]]
- [[manifest-pages-source-branch-mismatch-2026-05-07]]
- [[section-pages-source-branch-mismatch-2026-05-07]]
