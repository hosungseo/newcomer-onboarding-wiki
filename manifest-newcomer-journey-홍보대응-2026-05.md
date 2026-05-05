# Manifest — newcomer journey 홍보대응 2026-05

## 목적
홍보·보도자료 대응을 처음 맡은 전입자와 newcomer-facing agent가 같은 순서로 자료를 찾아가도록 묶은 실행 manifest다.

## Journey order
1. **업무축 이해** — [[hub-홍보대응]]에서 홍보대응을 정책 사실, 공개근거, 메시지 대상, 확인선, 금지선으로 나눈다.
2. **첫주 상황 진입** — [[newcomer-path-보도자료대응-첫주-2026-05]]에서 목적 분류, 공개근거 수집, 부처군별 민감 경계, 협업선을 확인한다.
3. **첫 질문 처리** — [[faq-보도자료대응-처음-무엇부터-확인하나]]에서 첫 30분 확인 질문을 적용한다.
4. **자료 대조** — [[source-홍보대응-자료대조순서]]에서 기존 보도자료, 공식 설명자료, 업무계획, 법령, 예산서, 공개 통계 순으로 대조한다.
5. **초안 작성** — [[process-홍보대응-보도자료초안-작성흐름]]에서 확정 사실, 공개근거, 담당확인 표시를 나눠 초안을 만든다.
6. **제출 전 검토** — [[checklist-홍보대응-보도자료초안-제출전검토]]로 발표 목적, 공개근거, 개인정보·민감정보, 확인선을 점검한다.
7. **대외전환 분기** — [[checklist-홍보대응-대외전환-문안분기-제출전검토]]로 보도자료 문안이 장관보고·국회·감사·민원 답변으로 재사용될 수 있는지 다시 판정한다.
8. **coverage 확인** — [[coverage-홍보대응-공통업무축-2026-05]]에서 현재 완성도와 다음 보강 후보를 확인한다.

## Agent-readable routing
```yaml
journey: 홍보대응
version: 2026-05
entry:
  - hub-홍보대응.md
  - newcomer-path-보도자료대응-첫주-2026-05.md
steps:
  classify_purpose: faq-보도자료대응-처음-무엇부터-확인하나.md
  check_sources: source-홍보대응-자료대조순서.md
  draft_release: process-홍보대응-보도자료초안-작성흐름.md
  pre_submit_review: checklist-홍보대응-보도자료초안-제출전검토.md
  external_conversion_review: checklist-홍보대응-대외전환-문안분기-제출전검토.md
  coverage: coverage-홍보대응-공통업무축-2026-05.md
  actual_exposure:
    readme: README 신규자 실행경계 route 묶음
    docs_index: docs/index.html 홍보대응 quick links
    landing: landing-전입자-공통업무축-2026-05
    agent_catalog: manifest-agent-readable-catalog-v1-2026-05
  boundary_router:
    question_checklist: checklist-홍보대응-boundary-router-질문형-검토.md
    checklist_coverage: coverage-홍보대응-boundary-router-질문형-검토-2026-05.md
    walkthrough: walkthrough-core-boundary-checklist-entry-2026-05.md
    landing_exposure:
      - landing-core-boundary-router-checklists-2026-05.md
      - landing-전입자-공통업무축-2026-05.md
    docs_index_exposure:
      - checklist-홍보대응-boundary-router-질문형-검토.md
      - coverage-홍보대응-boundary-router-질문형-검토-2026-05.md
      - checklist-홍보대응-대외전환-문안분기-제출전검토.md
    faq_status: pending_no_placeholder_wikilink
    source_status: use_source_홍보대응_자료대조순서_until_boundary_source_exists
    process_status: use_process_홍보대응_보도자료초안_작성흐름_until_boundary_process_exists
stop_lines:
  - 미확정 정책결정
  - 비공개 내부검토
  - 비공개 협의·대응 전략
  - 개인정보와 재식별 가능한 사례
  - 사건별 민감정보
  - 수사·감사·감독·보안 세부
  - 특정 업체·입찰·평가 정보
  - 법률자문성 결론
```

## Boundary router route
1. [[source-홍보대응-자료대조순서]]에서 기존 보도자료·설명자료·업무계획·법령·예산서·통계의 공개근거를 먼저 확인한다.
2. 외부 설명문이나 언론 답변으로 바꾸기 전 [[checklist-홍보대응-boundary-router-질문형-검토]]를 통과해 확정 사실, 개인정보, 피해자·신고자 식별위험, 비공개 대응전략을 가른다.
3. 별도 홍보대응 boundary FAQ/source/process note가 생기기 전까지는 기본 FAQ/source/process를 사용하고, 생성 전 후보명은 wikilink로 만들지 않는다.
4. [[coverage-홍보대응-boundary-router-질문형-검토-2026-05]]에서 checklist coverage와 남은 gap을 확인한다.
5. 다른 core 업무축 경계와 비교해야 하면 [[walkthrough-core-boundary-checklist-entry-2026-05]]로 돌아간다.
6. 전입자가 웹에서 찾을 때는 [[landing-core-boundary-router-checklists-2026-05]] 또는 [[landing-전입자-공통업무축-2026-05]]를 먼저 보고, docs/index.html quick link에서는 checklist → coverage → 대외전환 checklist 순서로 확인한다.

## Public/private decision route
1. 공개 가능한 확정 사실과 공개근거만 본문 문장으로 남긴다.
2. 미확정 정책방향, 비공개 협의, 대응전략은 담당 확인 필요 또는 제외로 표시한다.
3. 피해자·신고자·민원인 식별위험은 boundary checklist에서 멈추고 공개문안으로 넘기지 않는다.
4. 장관보고·국회·감사·민원 답변으로 전환할 때는 [[checklist-홍보대응-대외전환-문안분기-제출전검토]]를 먼저 탄다.

## 공개/비공개 금지선
이 manifest는 공개 온보딩 경로만 다룬다. 미확정 정책결정, 비공개 내부검토, 비공개 협의·대응 전략, 개인정보, 민원인·피해자·신고자 식별정보, 사건별 민감정보, 수사·감사·감독·보안 세부, 특정 업체·입찰·평가 정보, 법률자문성 결론은 초안·체크리스트·agent routing에 넣지 않는다.

## Related Notes
- [[quality-gate-홍보대응-공통업무축-2026-05]]
- [[landing-전입자-공통업무축-2026-05]]
- [[README]]
- [[hub-장관보고]]
- [[hub-국회대응]]
- [[hub-감사대응]]
- [[hub-민원대응]]
