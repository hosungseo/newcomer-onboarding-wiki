---
title: docs/landing 노출 gap 실행 패킷 — 예산·민원·법령·협업회의
kind: process
status: draft
created: 2026-05-07
updated: 2026-05-07
audience: maintainer·agent
scope: docs/landing exposure planning only
confidentiality: public-only
---

# docs/landing 노출 gap 실행 패킷 — 예산·민원·법령·협업회의

## 목적

README, docs index, landing 진입면에 아직 덜 보이는 새 경로를 한 번에 노출할 때 쓸 실행 패킷이다. 이번 파일은 실제 README/docs/landing을 고치지 않고, 다음 작업자가 바로 집어넣을 exact route와 금지선을 고정한다.

## 1. 예산대응 hub 보강

우선 노출 단위는 예산 단독 hub와 예산·민원 결합 route를 같이 둔다.

- 시작점: [[hub-예산대응]]
- 결합 coverage: [[coverage-예산대응-민원대응-실행경계-2026-05]]
- 요구자료 walkthrough: [[walkthrough-예산대응-전입자-라우터-2026-05]]
- 작성 흐름: [[process-예산대응-요구자료-작성흐름]]
- 제출 전 점검: [[checklist-예산대응-요구자료-제출전검토]]

노출 문구는 “예산 요구자료는 공개·확정 원천을 먼저 대조하고, 내부검토·미확정 수치는 제출 전 제외한다”로 잡는다.

## 2. 민원대응 공개경계

민원은 답변 초안보다 먼저 공개경계와 이송·마스킹 경계를 노출한다.

- 공개경계 path: [[newcomer-path-민원대응-공개경계]]
- 전입자 라우터: [[walkthrough-민원대응-전입자-라우터-2026-05]]
- 반복민원 처리경계: [[process-민원대응-반복민원-처리경계]]
- 답변 전 precheck: [[checklist-민원대응-답변전-공개경계-precheck]]
- 마스킹·이송·답변초안 점검: [[checklist-민원대응-마스킹-이송-답변초안]]

노출 문구는 “민원 답변은 개인정보·제3자 정보·타기관 소관을 먼저 분리한 뒤 공개 가능한 확정 사실만 답변한다”로 잡는다.

## 3. 법령대응 공개설명경계

법령대응은 법령 해석 결론처럼 보이지 않게, 공개 설명과 법무 검토 경계를 함께 보여준다.

- 공개설명 coverage: [[coverage-법령대응-공개설명경계-2026-05]]
- 공개설명 path: [[newcomer-path-법령대응-공개설명경계]]
- 입법예고 설명초안 흐름: [[process-법령대응-입법예고-의견수렴-설명초안]]
- 공개설명 법무 precheck: [[checklist-법령대응-공개설명-법무precheck]]
- 품질 gate: [[quality-gate-법령대응-공개설명경계-2026-05]]

노출 문구는 “법령대응 공개설명은 조문·입법예고·공개자료 설명에 머물고, 개별 사안 적용 결론은 법무 검토 전 단정하지 않는다”로 잡는다.

## 4. 협업회의운영 walkthrough

협업회의운영은 회의 전 준비와 회의 후 결과·후속조치를 나눠 노출한다.

- 결합 coverage: [[coverage-정보공개기록관리-협업회의-실행경계-2026-05]]
- 협업회의 전입자 라우터: [[walkthrough-협업회의운영-전입자-라우터-2026-05]]
- 결과초안·후속조치 흐름: [[process-협업회의운영-결과초안과후속조치]]
- 회의 전 precheck: [[checklist-협업회의운영-후속조치-회의전-precheck]]
- 회의결과·후속조치 실행경계: [[checklist-협업회의운영-회의결과-후속조치-실행경계]]

노출 문구는 “협업회의는 확정 합의, 후속조치 담당, 공개 가능한 결과만 분리하고 잠정 발언·기관 간 이견은 외부 공유 문안에 섞지 않는다”로 잡는다.

## 추천 배치 순서

1. landing: 예산대응 hub, 민원대응 공개경계, 법령대응 공개설명경계, 협업회의운영 walkthrough를 각각 카드 1개로 노출한다.
2. docs index: 각 카드 아래 `coverage/path → walkthrough/process → checklist/quality gate` 순서로 3~5개 링크만 둔다.
3. README: 전체 목록을 늘리지 말고 위 4개 route의 한 줄 설명과 대표 링크 1~2개만 둔다.

## stop / forbidden boundary lines

- STOP: 공개·확정 원천으로 대조되지 않은 예산 수치, 미확정 예산안, 내부검토 자료는 docs/landing 설명 예시에도 넣지 않는다.
- STOP: 민원 원문 개인정보, 제3자 식별정보, 주소·연락처·계정정보, 민감 사건 사실은 요약·예시·테스트 문구에 쓰지 않는다.
- STOP: 법령 설명을 개별 사안 적용 결론, 법률자문, 처분 가능성 판단처럼 쓰지 않는다.
- STOP: 회의 발언, 기관 간 이견, 협상 카드, 잠정 합의는 확정 결과나 공식 입장처럼 노출하지 않는다.
- FORBIDDEN: 존재하지 않는 placeholder wikilink를 만들지 않는다.
- FORBIDDEN: README.md, docs/index.html, landing-* 파일은 이 패킷 작업에서 직접 수정하지 않는다.
- FORBIDDEN: commit/push를 하지 않는다.

## 이번 산출물의 다음 행동

다음 작업자는 이 파일을 기준으로 README/docs/landing 중 하나를 고른 뒤, 위 existing wikilink만 사용해 최소 노출을 추가한다. 실행 전에는 [[coverage-docs-landing-low-density-newcomer-paths-2026-05]]에서 저밀도 newcomer path와 walkthrough 축을 먼저 확인해, 과밀 목록을 늘리는 대신 `path → walkthrough → checklist/quality` 세 칸으로 줄인다.
