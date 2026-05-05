# Manifest — newcomer journey 대외협력·현장소통 2026-05

## 목적
대외협력·현장소통 업무를 처음 맡은 전입자와 newcomer-facing agent가 협력 대상, 소통 목적, 현장 의견, 공식 입장 가능 범위, 후속 조치, 공개·기록 경계를 같은 순서로 확인하도록 만든 실행 manifest다.

## Journey order
1. **업무축 이해** — [[hub-대외협력현장소통]]에서 협력 대상, 소통 목적, 자료 공개 경계, 후속 조치를 나눈다.
2. **첫주 경로** — [[newcomer-path-대외협력현장소통-첫주-2026-05]]에서 협력 대상과 소통 목적, 공유자료와 내부검토자료를 확인한다.
3. **첫 질문** — [[faq-현장의견과-공식입장은-어떻게-구분하나]]로 현장 의견과 기관 공식 입장을 분리한다.
4. **표현 예시 선택** — [[faq-대외협력현장소통-현장의견-표현예시]]에서 현장 의견을 확정 입장처럼 보이게 만드는 표현을 걷어낸다.
5. **자료 대조** — [[source-대외협력현장소통-자료대조순서]]에서 공유자료, 내부 검토자료, 현장 의견, 후속 조치 후보를 대조한다.
6. **결과초안 작성** — [[process-대외협력현장소통-결과초안-작성흐름]]에서 협력 대상, 소통 목적, 현장 의견, 공식 입장 가능 범위, 후속 조치를 분리한다.
7. **후속조치 점검** — [[checklist-대외협력현장소통-후속조치-검토]]에서 담당 부서·기한·보고경로·공개경계를 확인한다.
8. **coverage 확인** — [[coverage-대외협력현장소통-공통업무축-2026-05]]에서 현재 완성도와 다음 gap을 확인한다.

## Agent-readable routing
```yaml
journey: 대외협력현장소통
version: 2026-05
entry:
  - hub-대외협력현장소통.md
  - newcomer-path-대외협력현장소통-첫주-2026-05.md
steps:
  classify_position: faq-현장의견과-공식입장은-어떻게-구분하나.md
  expression_examples: faq-대외협력현장소통-현장의견-표현예시.md
  check_sources: source-대외협력현장소통-자료대조순서.md
  draft_result: process-대외협력현장소통-결과초안-작성흐름.md
  followup_check: checklist-대외협력현장소통-후속조치-검토.md
  masking_check: checklist-대외협력현장소통-민감정보-masking-제출전검토.md
  conversion_check: checklist-대외협력현장소통-국회감사민원-전환검토.md
  coverage: coverage-대외협력현장소통-공통업무축-2026-05.md
  conversion_manifest: manifest-newcomer-journey-대외협력현장소통-국회감사민원전환-2026-05.md
  walkthrough_status: no_dedicated_walkthrough_use_section_and_manifest
branch_to:
  회의_후속조치: hub-협업회의운영.md
  기록_정보공개: hub-정보공개기록관리.md
  민원_반복질의: hub-민원대응.md
  홍보_대외설명: hub-홍보대응.md
  장관_보고사항: hub-장관보고.md
  국회_자료요구: hub-국회대응.md
stop_lines:
  - 개인정보와 민원인 식별정보
  - 업체별 민감정보
  - 비공개 내부검토 의견
  - 미확정 정책안
  - 현장 관계자 개인 평가나 발언 왜곡
  - 기관 공식 입장처럼 보이는 미확인 문장
```

## Public/private decision route
1. 공개자료와 확정 기관 입장만 결과초안 본문에 남긴다.
2. 현장 의견, 관계기관 협의 상태, 후속조치 후보는 담당 확인 필요 표시를 붙인다.
3. 개인정보·민원인·업체·관계자 식별 위험은 masking checklist로 보내고 공개 route에서 제외한다.
4. 국회·감사·민원으로 전환되면 [[manifest-newcomer-journey-대외협력현장소통-국회감사민원전환-2026-05]]를 먼저 탄 뒤 대상 업무축 checklist로 내려간다.

## 공개/비공개 금지선
이 manifest는 공개 온보딩 경로만 다룬다. 개인정보, 민원인 식별정보, 업체별 민감정보, 비공개 내부검토 의견, 미확정 정책안, 현장 관계자 개인 평가나 발언 왜곡은 route, 결과초안, checklist에 넣지 않는다.

## Related Notes
- [[faq-공통업무축-민감정보-masking-사례구분]]
- [[section-공통업무축-내부운영협업대외소통-2026-05]]
- [[coverage-내부운영협업3축-운영정보공개회의-2026-05]]
- [[landing-전입자-공통업무축-2026-05]]
- [[README]]
