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

## 실무자 트랙 (practitioner)

**배경**: 신규공무원(임용 직후 ~ 1년차)만으로는 저연차 실무자(1~5년차)의 실무 상황을 못 담는다. 관문 체계를 트랙 단위로 분리해 양쪽을 수용한다.

### 트랙 구분
- **newcomer 트랙** (기존): 임용 직후 신규자의 "첫 실무" 상황. 예: `gate-첫문서처리`, `gate-첫급여`
- **practitioner 트랙** (신규): 저연차 실무자의 주기적·이벤트형 실무. 예: `gate-예산배정`, (향후) `gate-국정감사`, `gate-조직개편`

### practitioner 트랙 gate 필드
```yaml
id: gate-{주제명}
track: practitioner           # 필수. newcomer 트랙은 생략 가능 (기본값)
target_reader: 저연차 실무자 1~5년차
version: YYYY-MM-DD
trigger: "저연차가 ROOT에서 보는 자연어 상황 문장"
entry_question: {...}
nodes: {...}
leaves: {...}
```

### 허용 노트 prefix
기존 `concept | process | source | faq | section | hub | newcomer-path`에 더해:
- `practitioner-path-{주제명}-YYYY-MM` — 저연차 실무자 경로 서사 (newcomer-path와 동일 포맷, 다른 대상)

### 문체 가이드
- newcomer: "왜 이게 필요한가"부터 설명. 전제 지식 낮게 가정
- practitioner: "실무 액션"에 집중. 전제 지식은 1~2년차 수준 가정. 법령·지침 조문은 정확히 인용
- 양 트랙 공통: 원자 노트는 그대로 공유. hub·concept·process·source·faq는 재사용

### 교차참조 원칙
- practitioner gate의 leaf가 newcomer-path-* 노트를 참조해도 무방 (연결된 흐름)
- newcomer gate의 leaf에서 practitioner 주제로 넘길 땐 `deeper` 출구에 `gate-{practitioner-주제}` 지정
