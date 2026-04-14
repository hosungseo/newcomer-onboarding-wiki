# 신규공무원 적응 위키 — 구조 설계 (2026-04)

## 한 줄 정의
이 위키는 **정부 공개 원문 → 파생 노트 → 허브/FAQ/path → 공개 인터페이스**로 이어지는, source-first LLM wiki다.

## 설계 목표
1. **출처가 먼저 보이는 구조**
2. **큰 문서보다 작은 재사용 단위가 중심인 구조**
3. **기관별 탐색과 공통 실무 탐색이 함께 가능한 구조**
4. **질문하면 답할 수 있고, 답하면 다시 note로 환원 가능한 구조**
5. **추가 수집보다 재조합과 갱신이 쉬운 구조**

---

## 1. 최상위 계층 구조
이 프로젝트의 최상위 계층은 5층으로 본다.

### Layer 0. Government Source Layer
실제 정부 공개 자료.
예:
- 법률 / 시행령 / 시행규칙
- 편람 / 예규 / 지침
- 업무계획 / 백서 / FAQ
- 교육운영계획 / 과정안내
- 보도자료 / 설명자료

여기는 위키가 아니라 **원천 근거 층**이다.

### Layer 1. Raw Archive Layer
원문 파일을 보존하는 층.
예:
- PDF
- HWP
- HWPX
- HTML capture
- manifest

여기의 역할은 **원문 보존과 검증 가능성 유지**다.

### Layer 2. Source Note Layer
원문 1개를 설명하는 상위 note 층.
예:
- `source-국가공무원인재개발원-2026-교육운영계획.md`
- `source-법제처-2025-법제업무편람.md`

여기의 역할은 **원문 하나를 읽을 수 있는 단위로 요약하고 provenance를 고정하는 것**이다.

### Layer 3. Derived Atomic Note Layer
source note를 다시 작은 질의 단위로 쪼갠 층.
하위 타입:
- section / topic
- process / step
- concept / tool
- system / actor

여기의 역할은 **검색과 재조합이 쉬운 최소 단위**를 만드는 것이다.

### Layer 4. Recomposition Layer
작은 note들을 묶는 층.
하위 타입:
- hub
- FAQ
- glossary
- newcomer path
- institution pack

여기의 역할은 **사용자 관점에서 다시 읽히게 만드는 것**이다.

### Layer 5. Publish / Ask Layer
최종 사용자 인터페이스 층.
예:
- browse
- reader
- ask
- curated pack

여기의 역할은 **사용자가 note 체계를 몰라도 답을 찾게 하는 것**이다.

---

## 2. note graph의 기본 흐름
기본 그래프는 아래처럼 단방향으로 이해한다.

`정부 원문`
→ `raw archive`
→ `document source note`
→ `section / process / concept atomic note`
→ `hub / FAQ / glossary / newcomer path`
→ `reader / ask / browse`

중요한 점은 아래다.
- 아래 note는 반드시 위 note를 가리킨다.
- 위 note 없이 아래 note만 독립적으로 존재하면 안 된다.
- path/FAQ는 source를 직접 흉내 내지 않고 upstream provenance를 상속받는다.

---

## 3. 주 탐색 축
이 위키의 주 탐색 축은 4개다.

### A. 기관 축
예:
- 행정안전부
- 인사혁신처
- 법제처
- 기획재정부
- 조달청
- 국가공무원인재개발원

기관 축은 `기관이 무엇을 맡는가`를 보여준다.

### B. 공통 실무 축
예:
- 조직
- 인사
- 복무
- 예산
- 법제
- 계약·조달
- 행정운영
- 문서 / 보고 / 회의 / 결재

이 축이 newcomer wiki의 **주력 축**이다.

### C. 절차 축
예:
- 입안
- 관계기관 협의
- 입법예고
- 규제심사
- 계약체결
- 검사·검수
- 대금지급

절차 축은 `무엇을 어떤 순서로 하는가`를 보여준다.

### D. 시스템 / 도구 축
예:
- e사람
- dBrain
- 국민신문고
- 나라장터
- 정보공개

시스템 축은 신규자가 실제로 마주치는 업무도구를 설명한다.

> 원칙: 공개 위키의 앞단 탐색은 **직급/계급**이 아니라 위 4개 축을 중심으로 구성한다.

---

## 4. note 타입별 역할

### 4-1. Source note
역할:
- 원문 1개를 대표하는 canonical note
- 파생 note들의 provenance anchor

필수 요소:
- 기관
- 문서명
- source page
- raw path
- 핵심 포인트

### 4-2. Section note
역할:
- 긴 문서 안의 큰 주제 덩어리를 분리

적합한 예:
- `section-신규자과정-예산.md`
- `section-법제업무편람-입법예고.md`

### 4-3. Process note
역할:
- 순서가 중요한 절차를 단계별로 정리

적합한 예:
- `process-정부입법-입안.md`
- `process-조달-검사검수.md`

### 4-4. Concept note
역할:
- 반복 등장하는 개념/시스템/용어를 독립 설명

적합한 예:
- `concept-dBrain.md`
- `concept-입법예고.md`

### 4-5. Hub note
역할:
- note들의 index
- 긴 본문보다 연결 구조가 중요

적합한 예:
- `hub-예산.md`
- `hub-국가공무원인재개발원.md`

### 4-6. FAQ note
역할:
- 반복 질문에 대한 canonical answer
- 독자 질문에서 진입하는 입구

적합한 예:
- `faq-신규공무원이-먼저-읽어야-할-예산문서는-무엇인가.md`

### 4-7. Path note
역할:
- 적응 시점 기준 재조합
- 큰 요약문이 아니라 읽기 순서 안내

적합한 예:
- `newcomer-path-임용후첫달.md`
- `newcomer-path-첫보고서작성.md`
- `newcomer-path-첫예산업무.md`

---

## 5. 폴더 구조 권장안
현재는 파일이 루트에 평면적으로 놓여 있지만, 점차 아래 구조로 가는 것이 좋다.

```text
신규공무원-적응위키/
  raw/
    YYYY-MM-DD-.../

  sources/
    common-core/
    ministry/
    institution/

  atoms/
    section/
    process/
    concept/

  hubs/
    institution/
    function/
    system/

  paths/
    newcomer/
    first-week/
    first-month/

  faq/
  glossary/
  design/
```

### 전환 원칙
- 지금 당장 전체 대이동은 하지 않는다.
- 새로 만드는 것부터 위 구조를 의식한다.
- 우선 `design/`, `sources/`, `atoms/`, `paths/` 분리를 1차 목표로 둔다.

---

## 6. metadata 최소 스키마
모든 note가 front matter를 가져야 하는 것은 아니지만, 최소한 아래 필드는 일관되게 들어가는 편이 좋다.

### source note 최소 필드
- type: source
- institution
- document_title
- source_page
- raw_path
- published_at or reference_year

### atomic note 최소 필드
- type: section | process | concept
- derived_from
- source_page
- raw_path
- parent_source_note
- scope

### path / FAQ 최소 필드
- type: path | faq
- based_on
- upstream_sources
- coverage
- freshness_note

---

## 7. note 생성 기준
### source note를 먼저 만드는 경우
- 원문 파일을 확보했을 때
- 공식 페이지를 확인했을 때
- 이후 파생 가능성이 높을 때

### section note로 쪼개는 경우
- 문서 안에서 큰 주제가 분명히 갈릴 때
- 다른 문서와 교차 재사용될 때

### process note로 쪼개는 경우
- 순서가 본질일 때
- 단계별 질문이 반복될 때

### concept note로 쪼개는 경우
- 특정 용어/시스템이 여러 문서에 반복될 때
- 독립 FAQ가 가능할 때

### hub를 만드는 경우
- 같은 기능/기관 아래 note가 5개 이상 쌓일 때
- 사용자에게 진입점이 필요할 때

### path를 만드는 경우
- source/atomic note가 최소 5개 이상 있고
- 읽기 순서를 설명할 가치가 있을 때

---

## 8. 지금 코퍼스에 바로 적용할 우선 구조
### A. 국가공무원인재개발원
source는 이미 있음.
다음 atomic 후보:
- 예산
- 인사제도
- 입법절차
- 보고서 작성
- AI 활용
- e사람
- dBrain
- 소통·협업
- 민원대응
- 마음건강

### B. 인사혁신처 인사실무
atomic 후보:
- 임용
- 보수
- 성과
- 복무
- 징계
- 휴가
- 유연근무
- 교육훈련

### C. 법제처
atomic 후보:
- 법령체계
- 입안
- 협의
- 입법예고
- 규제심사
- 법제처 심사
- 공포

### D. 기재부/기획예산처
atomic 후보:
- 예산편성
- 예산집행
- 기금운용
- 성과관리
- 국가재정운용계획
- dBrain

### E. 조달청
atomic 후보:
- 계약방법
- 입찰공고
- 예정가격
- 낙찰자 선정
- 계약체결
- 검사·검수
- 대금지급
- 등록업무
- 나라장터

---

## 9. 공개 인터페이스 설계 원칙
### Browse 화면
첫 진입에서 보여줄 탭은 아래가 적당하다.
- 기관별
- 공통 실무별
- 절차별
- 시스템별
- 최근 업데이트

### Reader 화면
note 본문 위/아래에 항상 보여야 할 것:
- 기관
- 문서명
- source page
- raw path
- 상위 source / 하위 atomic 링크
- 최신성 기준

### Ask 화면
답변은 아래 순서로 구성하면 좋다.
1. 짧은 답
2. 근거 note 2~5개
3. 원문 바로가기
4. 최신성 메모

---

## 10. 금지 패턴
- source 없이 만든 예쁜 요약문
- 동일 사실을 여러 note에 반복 복붙
- path note가 원문처럼 행동하는 것
- hub note가 모든 내용을 다 떠안는 것
- atomic note가 상위 source와 끊겨 있는 것

---

## 11. 지금 기준 추천 다음 액션
1. `design/` 계층의 기준 문서 3개를 확정한다.
   - `README.md`
   - `collection-strategy-2026-04.md`
   - `atomization-rules-2026-04.md`
2. 이번 문서 `structure-design-2026-04.md`를 설계 기준 문서로 추가한다.
3. 국가인재원 자료부터 실제 `section / concept` note 8~10개를 뽑아 첫 번째 atomic cluster를 만든다.
4. 그 다음 인사혁신처 / 법제처 / 예산 / 조달 순으로 같은 구조를 반복한다.

## 추천 한 줄
이 위키는 문서 저장소가 아니라, **정부 원문에서 파생된 작은 note들을 구조적으로 연결하는 지식 그래프**여야 한다.
