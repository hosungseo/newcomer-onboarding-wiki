# Source — Pages second WAIT recheck evidence (2026-05-07)

## Evidence captured
Second Pages WAIT recheck evidence:

- HTTP status: `200`
- Live response bytes: `31,241`
- Local `docs/index.html` bytes: `19,192`
- Local route title: absent from live response
- Gateway title: present in live response

## Interpretation
This is a stale-live-artifact signal. The live response is reachable and substantive, but the content identity still matches the older gateway surface rather than the local route-index surface. Keep the Pages result open as `WAIT` until a later check proves route-title/label/link reflection, or until deployment metadata/repeated stale checks justify `FAIL`.

## Related notes
- [[source-pages-gateway-title-route-index-wait-evidence-2026-05-07]] — prior source note defining gateway-title-versus-route-index mismatch as WAIT evidence.
- [[source-pages-live-response-verification-boundary-2026-05-07]] — defines live-response checking as a boundary check, not a publishing action.
- [[faq-pages-200-but-stale-index-how-to-tell-2026-05-07]] — user-facing explanation of HTTP 200 with stale content.

## Stop / forbidden
- STOP: Preserve this as read-only verification evidence; do not alter Pages, root-note graph shape, or route coverage based only on this mismatch.
- FORBIDDEN: commit, push, deploy, edit `docs/index.html`, edit `docs/gates.json`, edit generated assets, rename/delete notes, or create new hubs/placeholders from this source note.
