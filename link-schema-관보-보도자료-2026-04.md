# 링크 스키마 — 관보·보도자료 live layer 연결 (2026-04)

## 한 줄 정의
`gov-press-md`와 `gov-gazette-md`는 newcomer wiki의 **최신성 레이어(live layer)** 로 붙인다.
즉 공통 코어 문서가 위키의 뼈대라면, 관보와 보도자료는 **최근 변화 / 현재 현안 / 설명 맥락**을 공급하는 외부 document DB다.

---

## 왜 이 레이어가 중요한가
현재 newcomer wiki는 다음을 잘 한다.
- 공통 실무 코어 source 정리
- 국가인재원 → common-core → process/concept bridge 형성
- 시스템 축(e사람, dBrain, 정보공개, 국민신문고)의 공식 source 확보

하지만 이것만으로는 아직 **정적 온보딩 위키**에 가깝다.

여기에
- `gov-gazette-md`의 관보 md
- `gov-press-md`의 보도자료 md
를 붙이면 위키는 아래 두 기능을 얻는다.

1. **최근 무엇이 바뀌었는가**
2. **지금 무엇이 중요하게 설명되고 있는가**

즉 newcomer wiki가
`기준 문서 + 최신 변화 + 현재 설명 프레임`
을 함께 보여주는 구조로 진화할 수 있다.

---

## 연결되는 4개 층
### 1. newcomer wiki
- 역할: 학습 / 적응 / 재조합 / FAQ / path
- 강점: 구조화된 온보딩 읽기 경로

### 2. `gov-press-md`
- 역할: 정부 보도자료 document DB
- 성격: 설명 / 홍보 / 정책 메시지 / 최신 현안
- 기본 단위: `data/YYYY/YYYY-MM/YYYY-MM-DD/001_부처명_제목.md`

### 3. `gov-gazette-md`
- 역할: 관보 document DB
- 성격: 공식 기록 / 제도 변화 / 조직 변화 / 인사 / 법령 / 고시 / 예규
- 기본 단위:
  - metadata: `data/YYYY/YYYY-MM/YYYY-MM-DD/001_기관명_제목.md`
  - readable: `readable-final/YYYY-MM-DD/001_기관명_제목.md`

### 4. `ai-readable-government`
- 역할: 위 두 DB를 읽는 public reader
- 성격: browse / reader / verification UI
- 의미: newcomer wiki가 원문 경로만 던지는 대신, 읽기 좋은 외부 reader로 연결할 수 있음

---

## 핵심 원칙
### 원칙 1. 관보·보도자료는 newcomer wiki의 본체를 대체하지 않는다
위키의 canonical backbone은 여전히 아래다.
- 정부조직법
- 직제 / 직제시행규칙
- 인사실무 / 복무 / 편람
- 예산 / 법제 / 조달 / 행정운영 기준 문서

관보와 보도자료는 이것을 대체하는 것이 아니라,
**그 위에 붙는 최신성 레이어**다.

### 원칙 2. metadata-first로 연결한다
각 note에 링크를 손으로 많이 다는 방식보다,
먼저 문서 레코드를 정규화하고 그다음 note에 붙이는 방식이 좋다.

즉 순서는 아래다.
`press/gazette record 정규화 → note candidate 매핑 → note block 생성`

### 원칙 3. newcomer wiki 안에 모든 관보/보도자료를 다시 복제하지 않는다
기본값은 **링크**다.
필요한 경우에만 newcomer wiki 안에서 별도 source note나 FAQ note로 승격한다.

### 원칙 4. 관보와 보도자료의 역할은 다르게 본다
- **관보** = 공식 변화 / 효력 / 기준 변경 / 인사 / 직제
- **보도자료** = 설명 / 해석 / 우선순위 / 정책 맥락 / 사례

둘을 같은 링크 타입으로 묶지 않는다.

---

## newcomer wiki에서의 역할 분담
### A. 관보 (`gazette`)
가장 잘 붙는 곳:
- 기관 note
- 조직/직제 note
- 인사 note
- 제도 변경 note
- FAQ 중 `최근 뭐가 바뀌었나`류

대표 relation:
- `changes-organization`
- `changes-rule`
- `appoints-personnel`
- `announces-effective-date`
- `creates-committee`
- `abolishes-committee`

### B. 보도자료 (`press`)
가장 잘 붙는 곳:
- 기관 note
- 정책/제도 설명 note
- FAQ
- newcomer pack
- first-week / first-month path

대표 relation:
- `explains-policy`
- `announces-program`
- `shows-current-issue`
- `provides-case`
- `supports-faq`
- `interprets-change`

---

## 공통 레코드 스키마
`ai-readable-government/docs/INDEXES.md` 기준으로, newcomer wiki가 읽을 최소 공통 필드는 아래처럼 잡는 것이 좋다.

| 필드 | 의미 |
|---|---|
| `layer` | `press` 또는 `gazette` |
| `title` | 문서 제목 |
| `institution` | 기관/부처 |
| `date` | 날짜 |
| `docType` | 문서 유형 |
| `path` | source repo 안의 대표 경로 |

### press 확장 필드
| 필드 | 의미 |
|---|---|
| `newsItemId` | 정책브리핑 식별자 |
| `originalUrl` | 원문 URL |
| `groupingCode` | 유형/그룹 |
| `attachmentCount` | 첨부 수 |

### gazette 확장 필드
| 필드 | 의미 |
|---|---|
| `basisLaw` | 근거법령 |
| `pdfUrl` | 원문 PDF |
| `metaPath` | metadata md 경로 |
| `rawPath` | raw 추출 경로 |
| `readablePath` | readable-final 경로 |
| `hasReadable` | readable-final 존재 여부 |

---

## newcomer wiki용 추가 매핑 필드
외부 DB 레코드를 newcomer wiki에 연결할 때는 아래 필드를 더 붙이는 것이 좋다.

| 필드 | 의미 |
|---|---|
| `targetNotes` | 연결할 위키 note 목록 |
| `relationType` | 어떤 방식으로 연결되는지 |
| `topicTags` | 예산/인사/복무/법제/조직/민원 등 |
| `timeWindow` | 최근 30/90/180일 등 |
| `confidence` | 자동매핑 신뢰도 |
| `whyLinked` | 연결 이유 요약 |

예시:

```yaml
layer: gazette
institution: 행정안전부
date: 2026-04-06
title: 행정안전부와 그 소속기관 직제 시행규칙 일부개정령
docType: 직제개정
path: data/2026/2026-04/2026-04-06/...
readablePath: readable-final/2026-04-06/...
targetNotes:
  - institution-행정안전부
  - concept-정부조직-직제와직제시행규칙
relationType: changes-organization
topicTags:
  - 조직
  - 직제
confidence: high
whyLinked: 행안부 조직/기능 이해 note의 최신 변경 근거
```

---

## note 타입별 연결 규칙
### 1. 기관 note
가장 먼저 붙일 대상.

붙일 블록:
- `최근 관련 관보`
- `최근 관련 보도자료`
- `최근 90일 변화`

기관 note는
- 기본 역할
- 조직 구조
- 최근 변화
- 최근 현안
을 같이 보여줘야 한다.

### 2. concept note
예:
- `concept-공무원-성과관리`
- `concept-정부업무시스템-dBrain`
- `concept-정부업무시스템-국민신문고`

붙일 때 기준:
- press: 설명을 보강하는 경우만
- gazette: 공식 변경이나 제도적 효력이 걸린 경우만

### 3. process note
예:
- `process-정보공개청구-신규자-기본흐름`
- `process-국민신문고-민원상담에서민원신청까지`

붙일 때 기준:
- press: 실제 안내/운영 방향/사례를 보강할 때
- gazette: 절차 자체를 바꾸는 규정 또는 효력 변경이 있을 때

### 4. FAQ / canonical answer
관보·보도자료 연결 효과가 가장 큰 층이다.

예:
- `최근 행안부 조직에 무슨 변화가 있었나?`
- `국민신문고는 상담과 민원을 어떻게 구분하나?`
- `정보공개 청구는 비용이 드나?`

FAQ는 정적 설명만 두지 말고,
최근 문서 레이어까지 연결하면 훨씬 살아난다.

### 5. newcomer path
예:
- `임용 후 첫 달`
- `첫 민원 대응`
- `첫 예산 업무`

여기에는 모든 문서를 다 붙이지 말고,
`최근 반드시 봐야 할 3~5건`만 선별해서 붙인다.

---

## 관계 타입(relationType) 권장안
### gazette 중심
- `changes-organization`
- `changes-rule`
- `appoints-personnel`
- `announces-effective-date`
- `creates-body`
- `abolishes-body`

### press 중심
- `explains-policy`
- `announces-program`
- `shows-current-issue`
- `provides-case`
- `supports-faq`
- `interprets-change`

### 공통
- `related-context`
- `recent-signal`
- `recommended-reading`

---

## UI / 노출 방식 권장
newcomer wiki note 안에서는 아래 3개 블록 정도가 적당하다.

### 1. 최근 관련 관보
- 최근 90일 기준
- 최대 3~5건
- 제목 / 날짜 / 기관 / relation type / readable link

### 2. 최근 관련 보도자료
- 최근 30~90일 기준
- 최대 3~5건
- 제목 / 날짜 / 부처 / relation type / original or reader link

### 3. 최근 변화 한 줄 요약
사람이 바로 읽기 좋게 요약
예:
- `최근 90일 관보 기준: 조직개편 1건, 위원회 설치 1건`
- `최근 30일 보도자료 기준: 디지털정부/민원서비스 개선 발표가 집중됨`

---

## 승격 규칙
관보/보도자료는 기본적으로 외부 DB 레코드로 링크하고,
아래 조건일 때만 newcomer wiki 내부 note로 승격한다.

### 승격 조건
1. 여러 note에서 반복 참조된다
2. FAQ 답변의 canonical evidence가 된다
3. 조직/직제/인사/예산 등 backbone 변화에 직접 연결된다
4. 단일 보도자료지만 향후 newcomer pack에서 계속 인용될 가치가 높다

즉 기본값은 `링크`, 예외적으로 `승격`이다.

---

## 파일럿 우선순위
처음부터 전 부처에 붙이지 말고 아래 3개만 먼저 한다.

### 1차 파일럿 기관
- 행정안전부
- 인사혁신처
- 기획재정부

### 1차 파일럿 note
- 기관 note들
- `concept-정부업무시스템-e사람`
- `concept-정부업무시스템-dBrain`
- `concept-정부업무시스템-국민신문고`
- `process-정보공개청구-신규자-기본흐름`
- `process-국민신문고-민원상담에서민원신청까지`
- `process-신규자-예산이해-기본흐름`
- `concept-신규공무원-인사적응-핵심축`

---

## 실제 연결 순서 권장
### Step 1. external record inventory 만들기
`gov-press-md`, `gov-gazette-md`에서
기관 / 날짜 / 제목 / 유형 / 링크 경로를 뽑는다.

### Step 2. link candidate map 만들기
규칙 기반으로
- institution match
- keyword match
- topic tag match
- recent window
를 적용해 note 후보를 매핑한다.

### Step 3. newcomer wiki에 block 추가
각 note 하단에
- 최근 관련 관보
- 최근 관련 보도자료
를 얇게 붙인다.

### Step 4. 자주 참조되는 문서를 FAQ/canonical answer로 승격
여기서부터 위키가 `답하는 구조`로 더 강해진다.

---

## 추천 구현 단위
처음부터 자동화하지 말고, 아래 순서가 좋다.

1. **schema note 작성**  ← 지금 문서
2. **행안부/인사혁신처/기재부 파일럿 link manifest 생성**
3. **기관 note 3개에 live block 수동/반자동 삽입**
4. 이후 JSON/스크립트로 자동화

---

## 한 줄 결론
관보 md와 보도자료 md는 newcomer wiki에 붙이면 좋다 정도가 아니라,
이 위키를 **정적 공무원 입문 위키**에서 **최근 변화까지 보이는 살아있는 온보딩 위키**로 바꾸는 핵심 레이어다.

다만 방식은 `문서 복제`가 아니라 **metadata-first linking**이어야 한다.
