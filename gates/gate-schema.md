# Gate 표준 (Akinator-style)

## 목적
신규자가 "뭘 모르는지 모르는" 상태에서, 상황 질문만으로 알맞은 노트 묶음(leaf)에 도달시킨다.

## 파일 규칙
- 위치: `gates/gate-{상황명}.yaml`
- 심화 트리는 `gates/gate-{상황명}-{심화명}.yaml` 별도 파일
- 한 gate는 하나의 진입 상황만 담당

## 필드
```yaml
id: gate-{상황명}
version: YYYY-MM-DD
trigger: "사용자가 ROOT 관문에서 보는 자연어 상황 문장"
entry_question:
  text: "뿌리 질문"
  options: [{label, goto|leaf}]
nodes:
  {node_id}:
    question: "..."
    options: [{label, goto|leaf}]       # 3-4개 + "모름" 1개
leaves:
  {leaf_id}:
    notes: [note-filename-without-.md]  # 1-3개 번들
    exits:
      shallow: leaf_id | null           # 더 얕게
      deeper: leaf_id | gate_id | null  # 더 깊게 (서브게이트 진입 가능)
      sideways: node_id | leaf_id       # 옆 상황으로
subgates: [gate_id, ...]
```

## 트리 규칙
1. 내부 노드 질문은 ≤ 4 선택지 + **"모름" 1개**. ROOT `entry_question`은 상황 선택용이라 최대 10개까지 허용
2. "모름"은 반드시 해소 leaf로 귀결 — `null` 금지
3. leaf는 **기존 노트 1-3개 번들**. 새 노트 생성은 schema 밖 작업
4. 리프마다 **3출구**: `shallow` / `deeper` / `sideways`
5. 역사적·제도 연혁 심화는 **별도 서브게이트**로 격리 (ROOT 경로 오염 방지)
6. 순환(cycle) 금지 — `sideways`만 같은 gate 내 다른 노드/리프로 이동 허용

## 버전 관리
- `version`은 개정일. 구조 변경 시 필수 갱신
- leaf가 참조하는 노트 파일명 변경 시 `scripts/validate-gates.js`로 검증 (향후)
