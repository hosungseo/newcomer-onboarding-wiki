---
title: landing 전입자 공통업무축 route-map density audit
kind: audit-note
status: draft
created: 2026-05-06
source: landing-전입자-공통업무축-2026-05.md
scope: dense route-map consolidation candidates
---

# Audit — landing 전입자 공통업무축 route-map density

## 판단

랜딩 본문은 예산/민원 구간보다 홍보/법령 구간에서 행 단위 라우트가 과밀하다. 특히 이미 허브 역할을 하는 walkthrough가 있는 교차축 행은 랜딩에 반복 노출하기보다 허브 링크로 접는 편이 좋다.

## consolidation 후보

| 원문 line | 현재 패턴 | 접을 허브 |
|---|---|---|
| 53 | [[faq-홍보대응-보도문의-공식답변은-어디서-멈추나]] → [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]] 체인이 표 안에 직접 노출됨 | [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]] |
| 61 | [[checklist-홍보대응-초안공개전환-문장별-precheck]] → [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]] 체인이 반복됨 | [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]] |
| 70 | [[faq-법령대응-의견조회-대외답변은-어디까지-가능한가]] → [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]] 체인이 교차축 허브와 중복됨 | [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]] |
| 75 | [[source-법령대응-공개설명-출처우선순위]] → [[checklist-법령대응-공개설명-법무precheck]]는 법령대응 표 안에서 세부 실행 체인을 직접 노출함 | [[checklist-법령대응-공개설명-법무precheck]] |
| 79 | [[checklist-법령대응-공개설명-법무precheck]] → [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]] 체인이 line 70, 75, 81과 겹침 | [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]] |
| 87-89 | coverage/manifest/quality 묶음이 랜딩 하단에 직접 노출되어 전입자 첫 진입보다 운영자 색이 강함 | [[coverage-예산대응-민원대응-실행경계-2026-05]], [[coverage-홍보대응-대외문안-실행경계-2026-05]], [[coverage-법령대응-공개설명경계-2026-05]] |

## 최소 정리안

- line 53, 61, 70, 79는 표에서는 단일 허브 [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]]만 남기고, FAQ/checklist 출발점은 해당 walkthrough 내부에서 고르게 한다.
- line 75는 랜딩에서는 [[checklist-법령대응-공개설명-법무precheck]] 단일 진입으로 줄이고, 출처 우선순위 세부는 checklist나 source 노트에서 처리한다.
- line 87-89는 전입자 랜딩이 아니라 운영/품질 확인 영역이므로 필요하면 별도 운영 허브로 이동한다. 현존 링크만 쓰는 최소 대안은 coverage 3종 링크만 남기고 manifest/quality gate 링크는 랜딩에서 접는 것이다.
