---
title: 실행경계 routes discovery coverage
kind: coverage
status: draft
created: 2026-05-06
updated: 2026-05-06
audience: 전입자·agent·docs maintainer
scope: 최근 실행경계 route의 manifest/coverage/quality gate 발견성 점검
confidentiality: public-only
---

# coverage — 실행경계 routes discovery

## 한 줄 요약

최근 실행경계 route는 **업무축별 manifest → coverage → quality gate**가 서로를 가리키고, docs/landing에 노출될 때 같은 이름·순서로 발견되어야 한다. 이 coverage는 계약조달·조직정원·법령대응·홍보대응·감사대응·국회대응·예산대응/민원대응·정보공개기록관리/협업회의·장관보고/성과평가 실행경계 묶음의 내부 발견성과 외부 노출 상태를 한 화면에 고정한다.

## route-map 진입점

- [[section-execution-boundary-routes-2026-05]] — 최근 실행경계 route를 사람이 업무축·상황별로 고르는 section entry.
- [[audit-boundary-duplicate-root-notes-2026-05]] — 실행경계 관련 root note 중복 후보를 삭제하지 않고 route-map 기준으로 정렬하는 audit.
- 이 coverage는 위 section/audit가 가리키는 manifest/coverage/quality gate 삼각형을 docs·landing 노출 전에 검증하는 기준점이다.

## route 묶음

| route | manifest | coverage | quality gate | docs/landing 노출명 |
|---|---|---|---|---|
| 계약조달 실행경계 | [[manifest-newcomer-journey-계약조달-실행경계-2026-05]] | [[coverage-계약조달-실행경계-2026-05]] | [[quality-gate-계약조달-실행경계-2026-05]] | 계약조달 실행경계 |
| 조직정원 실행경계 | [[manifest-newcomer-journey-조직정원-실행경계-2026-05]] | [[coverage-조직정원-실행경계-2026-05]] | [[quality-gate-조직정원-실행경계-2026-05]] | 조직정원 실행경계 |
| 법령대응 공개설명경계 | [[manifest-newcomer-journey-법령대응-공개설명경계-2026-05]] | [[coverage-법령대응-공개설명경계-2026-05]] | [[quality-gate-법령대응-공개설명경계-2026-05]] | 법령대응 공개설명경계 |
| 감사대응 자료제출경계 | [[manifest-newcomer-journey-감사대응-자료제출경계-2026-05]] | [[coverage-감사대응-자료제출경계-2026-05]] | [[quality-gate-감사대응-자료제출경계-2026-05]] | 감사대응 자료제출경계 |
| 국회대응 자료요구경계 | [[manifest-newcomer-journey-국회대응-자료요구경계-2026-05]] | [[coverage-국회대응-자료요구경계-2026-05]] | [[quality-gate-국회대응-자료요구경계-2026-05]] | 국회대응 자료요구경계 |
| 정보공개·기록관리/협업회의 실행경계 | [[manifest-newcomer-journey-정보공개기록관리-협업회의-실행경계-2026-05]] | [[coverage-정보공개기록관리-협업회의-실행경계-2026-05]] | [[quality-gate-정보공개기록관리-협업회의-실행경계-2026-05]] | 정보공개·기록관리/협업회의 실행경계 |
| 예산대응·민원대응 실행경계 | [[manifest-newcomer-journey-예산대응-민원대응-실행경계-2026-05]] | [[coverage-예산대응-민원대응-실행경계-2026-05]] | [[quality-gate-예산대응-민원대응-실행경계-2026-05]] | 예산대응·민원대응 실행경계 |
| 홍보대응 대외문안 실행경계 | [[manifest-newcomer-journey-홍보대응-대외문안-실행경계-2026-05]] | [[coverage-홍보대응-대외문안-실행경계-2026-05]] | [[quality-gate-홍보대응-대외문안-실행경계-2026-05]] | 홍보대응 대외문안 실행경계 |
| 장관보고·성과평가 실행경계 | [[manifest-newcomer-journey-장관보고-성과평가-실행경계-2026-05]] | [[coverage-장관보고-성과평가-실행경계-2026-05]] | [[quality-gate-장관보고-성과평가-실행경계-2026-05]] | 장관보고·성과평가 실행경계 |

## docs/landing 발견성 규칙

- README 현재 노출은 `section-execution-boundary-routes-2026-05.md`와 `coverage-execution-boundary-routes-discovery-2026-05.md` 두 entry 링크로 제한한다.
- docs/index 현재 노출은 route-map quick links 4개(정보공개·협업, 계약조달·조직정원, 예산·민원, 홍보·법령)와 7개 실행경계 section으로 구성되어 있다.
- docs/index나 landing 계열에서 manifest/coverage/quality gate까지 노출할 때는 같은 route 이름 아래에 묶는다.
- 첫 링크는 사람이 읽는 coverage로 두고, agent 실행이 필요할 때 manifest로 넘긴다.
- quality gate는 공개 공유·초안 제출·agent 결과 수락 직전의 마지막 링크로 둔다.
- 링크명은 파일명 축약 대신 “계약조달 실행경계”, “조직정원 실행경계”, “법령대응 공개설명경계”, “감사대응 자료제출경계”, “국회대응 자료요구경계”, “정보공개·기록관리/협업회의 실행경계”, “예산대응·민원대응 실행경계”, “장관보고·성과평가 실행경계”처럼 업무축+경계명으로 쓴다.
- route가 추가되면 이 coverage에 manifest/coverage/quality gate 세 칸이 모두 찬 뒤 docs/landing 노출을 요청한다.
- [[section-execution-boundary-routes-2026-05]]는 route 선택용 entry로, [[audit-boundary-duplicate-root-notes-2026-05]]는 중복 정리용 audit로 노출한다. 둘 다 route 본문을 대체하지 않는다.

## 내부 완성도 체크

- [x] 계약조달 route는 manifest, coverage, quality gate가 상호 연결되어 있다.
- [x] 조직정원 route는 manifest, coverage, quality gate가 상호 연결되어 있다.
- [x] 두 기존 route 모두 공개자료 기반 실행과 비공개 멈춤선을 함께 가진다.
- [x] 법령대응 route는 입법예고·신구조문·의견답변의 공개설명경계를 manifest, coverage, quality gate로 묶는다.
- [x] 감사대응 route는 walkthrough/FAQ/source/checklist까지 연결한 manifest, coverage, quality gate를 가진다.
- [x] 국회대응 route는 source/process/예산 branch까지 연결한 manifest, coverage, quality gate를 가진다.
- [x] 정보공개·기록관리/협업회의 route는 공개검토·기록물이관·회의결과 후속조치 실행경계를 manifest, coverage, quality gate로 묶는다.
- [x] 예산대응·민원대응 route는 예산 요구자료와 민원 답변이 겹치는 실행경계를 manifest, coverage, quality gate로 묶는다.
- [x] 장관보고·성과평가 route는 보고용 설명, 성과 사실 설명, 별도 평가 판단의 경계를 manifest, coverage, quality gate로 묶는다.
- [x] 아홉 route 모두 docs/landing 노출명을 사람이 읽을 수 있는 업무축 단위로 정했다.
- [x] README는 route-map entry 두 개(section, discovery coverage)만 노출하고, 개별 route 삼각형은 이 coverage 안에서 발견되게 한다.
- [x] 새 route 추가 시 빈 링크 없이 이 discovery coverage에 먼저 등록하는 규칙을 둔다.
- [x] [[section-execution-boundary-routes-2026-05]]와 [[audit-boundary-duplicate-root-notes-2026-05]]가 discovery coverage에서 같은 route-map 기준으로 발견된다.
- [x] docs/index route-map quick links는 4개 묶음형 walkthrough로 노출되고, 본문 section은 정보공개·계약조달·예산/민원·조직정원·홍보·법령 흐름을 가진다.
- [x] [[quality-gate-execution-boundary-routes-discovery-2026-05]]가 section/audit/docs 노출 후 최종 점검 지점으로 연결된다.

## 노출 순서 제안

1. 계약조달 실행경계 — [[coverage-계약조달-실행경계-2026-05]] → [[manifest-newcomer-journey-계약조달-실행경계-2026-05]] → [[quality-gate-계약조달-실행경계-2026-05]]
2. 조직정원 실행경계 — [[coverage-조직정원-실행경계-2026-05]] → [[manifest-newcomer-journey-조직정원-실행경계-2026-05]] → [[quality-gate-조직정원-실행경계-2026-05]]
3. 법령대응 공개설명경계 — [[coverage-법령대응-공개설명경계-2026-05]] → [[manifest-newcomer-journey-법령대응-공개설명경계-2026-05]] → [[quality-gate-법령대응-공개설명경계-2026-05]]
4. 감사대응 자료제출경계 — [[coverage-감사대응-자료제출경계-2026-05]] → [[manifest-newcomer-journey-감사대응-자료제출경계-2026-05]] → [[quality-gate-감사대응-자료제출경계-2026-05]]
5. 국회대응 자료요구경계 — [[coverage-국회대응-자료요구경계-2026-05]] → [[manifest-newcomer-journey-국회대응-자료요구경계-2026-05]] → [[quality-gate-국회대응-자료요구경계-2026-05]]
6. 정보공개·기록관리/협업회의 실행경계 — [[coverage-정보공개기록관리-협업회의-실행경계-2026-05]] → [[manifest-newcomer-journey-정보공개기록관리-협업회의-실행경계-2026-05]] → [[quality-gate-정보공개기록관리-협업회의-실행경계-2026-05]]
7. 예산대응·민원대응 실행경계 — [[coverage-예산대응-민원대응-실행경계-2026-05]] → [[manifest-newcomer-journey-예산대응-민원대응-실행경계-2026-05]] → [[quality-gate-예산대응-민원대응-실행경계-2026-05]]
8. 홍보대응 대외문안 실행경계 — [[coverage-홍보대응-대외문안-실행경계-2026-05]] → [[manifest-newcomer-journey-홍보대응-대외문안-실행경계-2026-05]] → [[quality-gate-홍보대응-대외문안-실행경계-2026-05]]
9. 장관보고·성과평가 실행경계 — [[coverage-장관보고-성과평가-실행경계-2026-05]] → [[manifest-newcomer-journey-장관보고-성과평가-실행경계-2026-05]] → [[quality-gate-장관보고-성과평가-실행경계-2026-05]]

## 품질 점검 링크

- [[quality-gate-execution-boundary-routes-discovery-2026-05]] — section entry와 duplicate-root audit가 coverage/manifest/quality gate 역할을 흐리지 않는지 점검한다.

## 멈춤선

- README는 이미 존재하는 파일이므로 placeholder wikilink로 만들지 않고, 현재 entry 링크 두 개의 노출 상태만 이 coverage에서 기록한다.
- 아직 생성되지 않았거나 이번 작업 범위가 아닌 landing 링크를 wikilink로 미리 만들지 않는다.
- docs/index는 이번 구조 기준으로 존재하는 route-map/section 링크만 기록하고, manifest/coverage/quality gate 링크를 HTML에 추가했다고 전제하지 않는다.
- 공개자료 기반 route가 아닌 내부검토·개인정보·업체 민감정보 route는 docs/landing discovery 묶음에 올리지 않는다.
- manifest/coverage/quality gate 중 하나라도 없으면 “노출 준비”가 아니라 “작성 필요”로 남긴다.
