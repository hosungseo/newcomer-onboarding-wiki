# Process — Institution Boundary Router Hub Linking 2026-05

## 목적
기관별 개별 hub에 [[manifest-institution-to-boundary-router-2026-05]]를 추가할 때, 중복·placeholder·민감정보 확장을 피하면서 안전하게 연결한다.

## 흐름
- [[faq-기관별-hub-boundary-router는-언제-직접-연결하나]] — 기관별 hub에 boundary router를 직접 연결할지 판단하는 FAQ.
1. 후보 확인: [[index-institution-boundary-router-next-hubs-2026-05]]에서 계약·조직·예산·민원·홍보·법령 boundary가 필요한 후보군을 고른다.
2. 파일 확인: 실제 hub 파일이 존재하는지 확인하고, 없으면 wikilink를 만들지 않는다.
3. 선택 점검: [[checklist-institution-boundary-router-hub-selection-2026-05]]의 선택 기준을 통과한 경우에만 역링크를 추가한다.
4. 연결 문구: hub 본문에는 “기관 경로에서 공통업무축 boundary note로 되돌아가는 route” 수준의 짧은 설명만 둔다.
5. 상태 반영: [[quality-gate-institution-to-boundary-router-2026-05]]와 관련 coverage에 연결 완료 상태를 남긴다.
6. 검증: root `.md` wikilink missing refs와 docs GitHub `.md` 링크를 확인한다.

## 연결하지 않는 경우
- hub가 이미 대표 기관군 section을 통해 충분히 연결되어 있다.
- 파일명이 불안정하거나 실제 파일이 없다.
- 연결을 위해 개인정보, 비공개 내부검토, 미확정 정책안, 업체별 민감정보, 법률자문성 결론을 설명해야 한다.

## 관련
- [[coverage-institution-boundary-router-section-2026-05]]
- [[quality-gate-institution-to-boundary-router-2026-05]]
- [[section-최근-boundary-note-묶음-2026-05]]

## 금지선
개인정보, 비공개 내부검토, 미확정 정책안, 업체별 민감정보, 법률자문성 결론, 감사·수사·보안 세부는 포함하지 않는다.
