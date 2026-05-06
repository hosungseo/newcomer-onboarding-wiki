---
title: docs/landing 저밀도 신규자 경로 노출 coverage
kind: coverage
status: draft
created: 2026-05-07
updated: 2026-05-07
audience: maintainer·agent
scope: docs/landing process and low-density newcomer path exposure
confidentiality: public-only
---

# docs/landing 저밀도 신규자 경로 노출 coverage — 2026-05

## 목적

새로 추가된 docs/landing process 패킷과 저밀도 newcomer path·walkthrough 축을 README나 docs index를 직접 늘리지 않고도 추적할 수 있게 묶는다. 이 coverage는 노출 우선순위와 연결 근거를 고정하는 루트 노트이며, 실제 공개면 수정 전 확인용으로 쓴다.

## 노출 기준

| 노출 후보 | 현재 근거 | 저밀도 판단 | 다음 연결 |
|---|---|---|---|
| docs/landing gap 실행 패킷 | [[process-docs-landing-exposure-gaps-예산민원법령협업-2026-05]] | README/docs/landing에 넣을 exact route가 정리되어 있지만, 실행 전 root coverage가 없었다. | [[section-execution-boundary-routes-2026-05]]에서 운영자용 bridge로 먼저 노출한다. |
| 공통업무축 landing density audit | [[audit-landing-전입자-공통업무축-route-map-density-2026-05-06]] | landing 본문을 직접 줄이지 않고도 접을 후보를 따로 고정했다. | [[landing-전입자-공통업무축-2026-05]] 수정 전 이 audit을 참조한다. |
| docs index density audit | [[audit-docs-index-route-map-density-2026-05-06]] | docs index 과밀 block과 중복 route-map을 읽기 쉬운 단위로 나눌 근거다. | docs index 수정 전 route-map/bridge 구분 기준으로 쓴다. |
| 실행경계 route section | [[section-execution-boundary-routes-2026-05]] | newcomer가 업무축을 고르는 root는 있으나 docs/landing process 노출 상태가 별도 coverage로 묶이지 않았다. | 이 coverage와 process 패킷을 section의 운영 확인 경로에 붙인다. |

## 저밀도 newcomer path 축

아래 축은 신규자가 “무엇부터 열지”를 고르기 쉬운 단일 path 또는 walkthrough로 이미 존재하지만, 과밀 landing/docs index에서는 묻히기 쉽다.

| 축 | 저밀도 첫 진입 | walkthrough / bridge | 마지막 확인 |
|---|---|---|---|
| 민원대응 공개경계 | [[newcomer-path-민원대응-공개경계]] | [[walkthrough-민원대응-전입자-라우터-2026-05]] | [[checklist-민원대응-답변전-공개경계-precheck]] |
| 법령대응 공개설명 | [[newcomer-path-법령대응-공개설명경계]] | [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]] | [[quality-gate-법령대응-공개설명경계-2026-05]] |
| 정보공개·협업회의 | [[newcomer-path-정보공개기록관리-협업회의-공개경계]] | [[walkthrough-정보공개기록관리-협업회의-실행경계-라우트맵-2026-05]] | [[coverage-정보공개기록관리-협업회의-실행경계-2026-05]] |
| 홍보대응 대외문안 | [[newcomer-path-홍보대응-대외문안-공개경계]] | [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]] | [[quality-gate-홍보대응-대외문안-실행경계-2026-05]] |
| 예산·민원 교차 | [[newcomer-path-예산대응-계약조달-첫흐름]] | [[walkthrough-예산대응-민원대응-실행경계-라우트맵-2026-05]] | [[coverage-예산대응-민원대응-실행경계-2026-05]] |

## 추천 노출 방식

1. README/docs index를 바로 늘리기 전에 [[section-execution-boundary-routes-2026-05]]의 “기존 discovery와의 관계”에 이 coverage를 둔다.
2. landing 수정은 [[audit-landing-전입자-공통업무축-route-map-density-2026-05-06]]의 과밀 후보를 먼저 접은 뒤, 위 저밀도 path 3개 이하만 남긴다.
3. docs index 수정은 [[audit-docs-index-route-map-density-2026-05-06]]의 block split 권고를 따른다. route-map은 bridge로, FAQ/source/process는 하위 링크로 둔다.
4. 신규자용 첫 화면에서는 coverage/manifest/quality gate를 전부 보이지 말고 `path → walkthrough → checklist/quality` 세 칸만 보인다.

## stop lines

- README.md, docs/index.html, landing 계열 파일은 이 coverage 작업에서 직접 수정하지 않는다.
- 존재하지 않는 placeholder wikilink를 만들지 않는다.
- graph/data 파일은 수정하지 않는다.
- 공개 원천으로 대조되지 않은 숫자, 개인정보, 비공개 내부검토, 법률자문성 결론은 예시 문구에도 넣지 않는다.
