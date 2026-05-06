---
title: 정보공개·기록관리/협업회의 실행경계 newcomer journey manifest
kind: manifest
status: draft
created: 2026-05-06
updated: 2026-05-06
audience: 정보공개·기록관리·협업회의·전입자·agent
scope: 공개자료 기반 정보공개·기록관리와 협업회의 후속조치 실행 경로
confidentiality: public-only
---

# manifest — 정보공개·기록관리/협업회의 실행경계 newcomer journey

```yaml
id: newcomer-journey-info-records-meeting-boundary-2026-05
label: 정보공개·기록관리/협업회의 실행경계
entry: router-정보공개기록관리-협업회의-신규자-공개경계
coverage: coverage-정보공개기록관리-협업회의-실행경계-2026-05
quality_gate: quality-gate-정보공개기록관리-협업회의-실행경계-2026-05
discovery_coverage: coverage-execution-boundary-routes-discovery-2026-05
audience:
  - 정보공개 담당 전입자
  - 기록관리 담당 전입자
  - 협업회의 운영 담당자
  - 공개·확정 자료 기반 검토초안 작성자
  - agent routing
route:
  - step: onboarding_section
    file: section-정보공개기록관리-onboarding-coverage-2026-05-07
    purpose: 청구 접수, 공개/비공개 경계, 기록물 보존·이관, evidence bundle, tracking checklist를 먼저 고정한다.
  - step: router
    file: router-정보공개기록관리-협업회의-신규자-공개경계
    purpose: 정보공개·기록관리·협업회의 중 먼저 열 route를 고른다.
  - step: newcomer_path
    file: newcomer-path-정보공개기록관리-협업회의-공개경계
    purpose: 기관·상황·업무축·자료·초안/체크리스트 순서로 첫 흐름을 잡는다.
  - step: walkthrough
    file: walkthrough-정보공개기록관리-협업회의-실행경계-라우트맵-2026-05
    purpose: 상황 분류 → 공개자료 대조 → 회의결과 네 칸 분리 → 기록관리 확인 → 공개 멈춤선의 전체 라우트맵을 훑는다.
  - step: disclosure_first_judgment
    file: faq-정보공개기록관리-청구공개검토-첫판단
    purpose: 청구 공개검토에서 공개 원문과 담당 확인 대상을 나눈다.
  - step: newcomer_public_private_boundary
    file: faq-정보공개기록관리-신규자-공개비공개-첫경계-2026-05
    purpose: 신규자가 답변 문장 작성 전에 공개 원문·확정 기록·보호정보·담당 확인 질문 네 칸으로 첫 경계를 잡는다.
  - step: disclosure_process
    file: process-정보공개기록관리-청구에서공개까지-분기흐름
    purpose: 청구대상 특정 → 보유·관리 확인 → 공개/부분공개/비공개/부존재 분기를 잡는다.
  - step: response_log_checklist
    file: process-정보공개기록관리-청구처리-응답로그-2026-05
    purpose: 접수·보유관리·검토근거·마스킹·결정·통지·후속 소유자를 청구처리 로그로 남긴다.
  - step: origin_records_source
    file: source-정보공개기록관리-원천기록-확인우선순서
    purpose: 생산·접수 주체, 최신본, 공개 원문, 내부검토 후보를 먼저 고정한다.
  - step: masking_faq
    file: faq-정보공개기록관리-마스킹은-언제-먼저-하나
    purpose: 개인정보·내부검토·감사/조사/보안·업체 민감정보가 보이면 초안 단계부터 원문 복사를 멈춘다.
  - step: public_source
    file: source-정보공개기록관리-공개자료-대조순서
    purpose: 공개자료·확정자료·보호영역·확인 질문을 대조한다.
  - step: evidence_bundle
    file: source-정보공개기록관리-답변초안-증거묶음-2026-05
    purpose: 답변 후보 문장마다 공개근거, 원천기록, 보호정보 범주, 담당 확인 질문을 묶어 초안 복사 가능성을 제한한다.
  - step: records_source
    file: source-정보공개기록관리-기록물관리-확인순서
    purpose: 기록물 이관·보존·관리 확인 순서를 잡는다.
  - step: disclosure_records_checklist
    file: checklist-정보공개기록관리-공개검토초안-기록물이관-보존
    purpose: 공개검토 초안과 기록물 이관·보존 판단을 제출 전 점검한다.
  - step: meeting_type_boundary
    file: faq-협업회의운영-조정회의와-결정회의는-무엇이-다른가-2026-05
    purpose: 회의 전 조정회의/결정회의를 구분해 미확정 조정사항과 확정결정 문장을 분리한다.
  - step: meeting_evidence_bundle
    file: source-협업회의운영-회의전-증거묶음-작성순서-2026-05
    purpose: 회의명·안건·공개근거·확정자료·확인필요·제외자료를 회의록 초안 전 evidence bundle로 묶는다.
  - step: meeting_agenda_minutes_followup_checklist
    file: process-협업회의운영-agenda-to-followup-log-2026-05-07
    purpose: agenda intake, stakeholders, minutes memo, 결정/보류, 담당·기한·후속조치 log를 한 흐름으로 남긴다.
  - step: meeting_process
    file: process-협업회의운영-결과초안과후속조치
    purpose: 회의결과 초안과 후속조치 문안을 확정사항 중심으로 정리한다.
  - step: meeting_external_share_faq
    file: faq-협업회의운영-회의결과는-어디까지-외부공유하나
    purpose: 공식 안건·공개자료 확인 사실·확정 후속조치와 내부관리 영역을 분리한다.
  - step: meeting_precheck
    file: checklist-협업회의운영-후속조치-회의전-precheck
    purpose: 다음 회의·보고 전 완료/지연/보류/폐기, 담당·기한·산출물, 공개 전환 가능성을 잠근다.
  - step: meeting_checklist
    file: checklist-협업회의운영-회의결과-후속조치-실행경계
    purpose: 결과공유·담당 지정·후속조치 실행 경계를 판정한다.
  - step: meeting_faq
    file: faq-협업회의운영-결과공유와후속조치-공개경계
    purpose: 결과공유와 후속조치 공개경계를 빠르게 재확인한다.
  - step: coverage
    file: coverage-정보공개기록관리-협업회의-실행경계-2026-05
    purpose: route 구성과 docs/manifest 노출 상태를 점검한다.
  - step: quality_gate
    file: quality-gate-정보공개기록관리-협업회의-실행경계-2026-05
    purpose: 공개 공유·초안 제출 전 금지선과 완성도를 검증한다.
branch_to:
  disclosure_public_private:
    when: 공개/비공개 경계 자체가 쟁점인 경우
    file: faq-정보공개-공개비공개-경계는-어디서-나누나
  disclosure_internal_review:
    when: 공개자료와 내부검토 구분이 필요한 경우
    file: faq-정보공개-공개자료와-내부검토는-무엇이-다른가
  onboarding_evidence_bundle:
    when: 신규자 답변초안에 근거·마스킹·담당 확인 질문을 붙여야 하는 경우
    file: source-정보공개기록관리-답변초안-증거묶음-2026-05
  onboarding_response_log:
    when: 청구 처리 이력과 통지 전 점검 항목을 남겨야 하는 경우
    file: process-정보공개기록관리-청구처리-응답로그-2026-05
  meeting_type_boundary:
    when: 회의 목적이 조정·결정·공유·사실확인·후속점검 중 무엇인지 애매한 경우
    file: faq-협업회의운영-조정회의와-결정회의는-무엇이-다른가-2026-05
  meeting_evidence_bundle:
    when: 회의 메모·회의록 초안 전에 근거·확정자료·제외자료를 분리해야 하는 경우
    file: source-협업회의운영-회의전-증거묶음-작성순서-2026-05
  meeting_agenda_minutes_followup:
    when: 안건 접수부터 진행 메모와 후속조치 log까지 한 체크리스트로 남겨야 하는 경우
    file: process-협업회의운영-agenda-to-followup-log-2026-05-07
  meeting_followup:
    when: 회의결과 공유와 후속조치 기준이 필요한 경우
    file: faq-협업회의운영-결과공유와후속조치-공개경계
stop_lines:
  - 개인 식별·재식별 가능 정보는 예시로도 복사하지 않고, 필요하면 '[개인정보]' 범주만 표시한다.
  - 초안, 검토의견, 회의 발언, 기관 간 이견, 조정전략, 결재 전 문안은 공개 원천이나 공개 확인사항처럼 쓰지 않는다.
  - 감사·조사·수사 착안점, 대상자, 신고자·참고인, 증거관계, 처분 가능성은 마스킹 전에도 요약하지 않는다.
  - 시설·시스템·취약점·권한·접근경로·작전 세부는 기록 존재 여부만으로 외부 설명하지 않는다.
  - 업체별 제안·가격·평가·영업비밀·입찰전략은 비교표나 후속조치표로 재구성하지 않는다.
  - 기록물로 존재한다는 사실만으로 공개 가능하다고 판단하지 않는다.
  - 담당·기한·산출물이 없는 후속조치는 완료된 실행결과처럼 제출하지 않는다.
  - 공개 원문·확정자료 근거가 없거나 공개/부분공개/비공개/부존재 판단이 애매하면 결론 문장을 만들지 않고 담당 확인 질문으로 남긴다.
completion_rule: checklist와 quality_gate를 통과하거나 담당 확인 요청으로 종료한다.
```

## 읽는 순서

1. [[section-정보공개기록관리-onboarding-coverage-2026-05-07]]
15. [[router-정보공개기록관리-협업회의-신규자-공개경계]]
15. [[newcomer-path-정보공개기록관리-협업회의-공개경계]]
15. [[walkthrough-정보공개기록관리-협업회의-실행경계-라우트맵-2026-05]]
15. [[faq-정보공개기록관리-청구공개검토-첫판단]]
15. [[faq-정보공개기록관리-신규자-공개비공개-첫경계-2026-05]]
15. [[process-정보공개기록관리-청구에서공개까지-분기흐름]]
15. [[process-정보공개기록관리-청구처리-응답로그-2026-05]]
15. [[source-정보공개기록관리-원천기록-확인우선순서]]
15. [[faq-정보공개기록관리-마스킹은-언제-먼저-하나]]
15. [[source-정보공개기록관리-공개자료-대조순서]]
15. [[source-정보공개기록관리-답변초안-증거묶음-2026-05]]
15. [[source-정보공개기록관리-기록물관리-확인순서]]
15. [[checklist-정보공개기록관리-공개검토초안-기록물이관-보존]]
15. [[faq-협업회의운영-조정회의와-결정회의는-무엇이-다른가-2026-05]]
15. [[source-협업회의운영-회의전-증거묶음-작성순서-2026-05]]
16. [[process-협업회의운영-agenda-to-followup-log-2026-05-07]]
17. [[process-협업회의운영-결과초안과후속조치]]
18. [[faq-협업회의운영-회의결과는-어디까지-외부공유하나]]
19. [[checklist-협업회의운영-후속조치-회의전-precheck]]
20. [[checklist-협업회의운영-회의결과-후속조치-실행경계]]
21. [[faq-협업회의운영-결과공유와후속조치-공개경계]]
22. [[coverage-정보공개기록관리-협업회의-실행경계-2026-05]]
23. [[quality-gate-정보공개기록관리-협업회의-실행경계-2026-05]]
