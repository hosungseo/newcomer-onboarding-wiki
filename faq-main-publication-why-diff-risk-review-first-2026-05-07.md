# FAQ — 왜 main 공개 전에 diff-risk review가 먼저인가

## 질문
`origin/main..feature` 구간에 커밋이 많고 `docs/index` 차이가 큰데, 바로 main에 공개해도 되는가?

## 답
아니오. 커밋 수가 많고 `docs/index` diff가 크면 변경 이유, 노출 경로, 링크 구조, 되돌림 범위를 한눈에 검증하기 어렵다. 이 경우 main publication은 배포 작업이 아니라 **diff-risk review 대상**으로 먼저 분리해야 한다.

## 판단 기준
- `origin/main..feature`가 많은 커밋을 포함하면, 개별 변경의 의도와 부작용을 커밋 메시지만으로 검증하기 어렵다.
- `docs/index` diff가 크면 랜딩·라우팅·공개 문안이 동시에 흔들릴 수 있다.
- main 공개 전에는 QUALITY-GATE 기준으로 변경 범위와 검증 증거를 남기고, [[README]] 또는 공개 진입점과의 연결이 의도한 대로인지 확인해야 한다.

## Stop
STOP: `origin/main..feature`의 커밋 묶음과 `docs/index` 대형 diff를 검토하지 않은 상태에서는 main publication을 진행하지 않는다.

## Forbidden
FORBIDDEN: 대형 `docs/index` diff를 “문서만 바뀐 것”으로 간주해 검증 없이 merge/push/publication 처리하지 않는다.
