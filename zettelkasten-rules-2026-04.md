# 신규공무원 적응 위키 — 제텔카스텐 적용 규칙 (2026-04)

## 한 줄 원칙
이 프로젝트에서 제텔카스텐은 **"하나의 큰 문서를 잘 요약하는 방식"** 이 아니라, **정부 원문에서 파생된 작은 note들을 주소 단위로 쌓고 연결하는 방식**으로 적용한다.

## 먼저 고정할 번역표
클래식 제텔카스텐 용어를 이 위키에 맞춰 번역하면 아래와 같다.

- `raw` = 아카이브 / 증거층
- `source-*` = literature note
- `section-*`, `process-*`, `concept-*` = permanent note
- `hub-*`, `newcomer-path-*`, `faq-*`, `glossary-*` = structure note / MOC

즉,
**모든 md가 아토믹인 것은 아니고, 아토믹이어야 하는 note는 자기 md를 가져야 한다.**

---

## 규칙 1. 하나의 md는 하나의 주소다
파일 하나는 링크 가능한 **한 주소**여야 한다.
즉 한 파일 안에 여러 독립 생각을 몰아넣지 않는다.

좋은 예:
- `process-정부입법-신규자-기본흐름.md`
- `concept-신규공무원-AI적응-핵심축.md`

나쁜 예:
- 입법 + 예산 + 조달 + AI를 한 md에 다 넣기

---

## 규칙 2. 하나의 atomic md는 하나의 재사용 가능한 생각 단위다
아토믹 note는 보통 아래 셋 중 하나여야 한다.
- 하나의 질문
- 하나의 절차
- 하나의 개념

즉 `길이`가 아니라 **재사용 가능성**이 분해 기준이다.

---

## 규칙 3. 모든 md를 아토믹으로 만들지 않는다
이 프로젝트에는 최소 3종류의 md가 있다.

### A. source md
원문 1개를 대표하는 문헌노트.

### B. atomic md
개념 / 절차 / 질문 단위의 영구노트.

### C. structure md
hub / path / FAQ / glossary처럼 note들을 재배열하는 구조노트.

이 구분이 무너지면 위키가 다시 큰 요약문 더미가 된다.

---

## 규칙 4. raw는 note가 아니다
PDF, HWP, HWPX, HTML capture는 생각 단위가 아니라 **증거 보관층**이다.
raw를 많이 모았다고 zettelkasten이 생기는 것은 아니다.
raw에서 source note를 만들고, source에서 atomic note를 빼내야 한다.

---

## 규칙 5. atomic note는 반드시 provenance를 가진 permanent note여야 한다
이 프로젝트의 atomic note는 독립 창작 메모가 아니라, **정부 원문에서 파생된 permanent note**다.
그러므로 atomic md는 반드시 아래 중 하나 이상을 가리켜야 한다.
- parent source note
- source page
- raw path
- 상위 section / process / concept chain

즉 이 위키에서 **orphan permanent note는 금지**다.

---

## 규칙 6. 먼저 중간 atom으로 만들고, 반복되면 더 쪼갠다
처음부터 가장 작은 원자로 가려고 하면 껍데기 note가 많아진다.
그래서 기본 순서는 아래가 좋다.

1. source note 생성
2. section 수준 중간 atom 생성
3. 여러 곳에서 반복 링크되면 concept / process로 더 분해

예:
- 지금은 `section-국가인재원-신규자과정-인사제도.md`로 두고,
- 나중에 반복되면
  - `concept-공무원-보수.md`
  - `concept-공무원-복무.md`
  - `concept-공무원-징계.md`
  로 더 쪼갠다.

즉 **중간 atom은 실패가 아니라 정상 단계**다.

---

## 규칙 7. 쪼개는 기준은 "독립 링크가 필요한가"다
아래 중 2개 이상이면 별도 md로 쪼갠다.
- 독립 질문에 답할 수 있다
- 다른 hub/path에서도 따로 링크될 수 있다
- 출처 계보가 다르다
- 갱신 주기가 다르다
- 문서 안에서 고유한 절차/개념 이름을 가진다
- 30~90초 안에 읽히는 단위로 독립 설명 가능하다

---

## 규칙 8. 구조노트는 설명서가 아니라 지도다
`hub-*`, `path-*`, `faq-*`는 새 대형 요약문을 쓰는 곳이 아니다.
역할은 아래 4개면 충분하다.
- 핵심 질문
- 먼저 읽을 note
- note 간 연결 관계
- 다음 확장 포인트

구조노트가 본문을 다 먹어버리면 제텔카스텐이 아니라 문서집이 된다.

---

## 규칙 9. 복붙보다 링크를 우선한다
같은 내용을 여러 note에 반복해서 쓰지 않는다.
기준 설명은 한 note에 두고, 다른 note에서는 링크로 받는다.

예:
- `source-법제처-입법과정안내.md`는 입법 전체 흐름의 canonical source
- `process-정부입법-신규자-기본흐름.md`는 newcomer reading sequence
- 둘 다 같은 내용을 길게 반복하지 않는다

---

## 규칙 10. 파일명은 지금은 의미 중심이 낫다
클래식 제텔카스텐처럼 시간 ID만 붙이는 방식도 가능하지만,
이 프로젝트는 공개 위키 pilot이므로 **의미가 드러나는 semantic filename**이 더 유리하다.

예:
- `concept-정부업무시스템-국민신문고.md`
- `process-정보공개청구-신규자-기본흐름.md`

즉 현재 단계에서는
- 검색 가능성
- 사람이 읽고 바로 이해되는 제목
- 링크 의미의 선명함
이 timestamp ID보다 더 중요하다.

필요하면 나중에 front matter에 내부 UID를 추가하면 된다.

---

## 지금 위키에 바로 적용하면 이렇게 된다
### source = literature note
- `source-법제처-입법과정안내.md`
- `source-행정안전부-정보공개포털.md`

### section/process/concept = permanent note
- `section-국가인재원-신규자과정-예산과재정.md`
- `process-신규자-예산이해-기본흐름.md`
- `concept-신규공무원-AI적응-핵심축.md`

### hub/path/faq = structure note
- `hub-국가인재원-common-core-연결지도.md`
- `newcomer-path-임용후첫달-국가인재원-2026-04.md`

---

## 실무 체크리스트
새 md를 만들기 전에 아래 5개를 본다.

1. 이 파일은 source / atomic / structure 중 무엇인가?
2. atomic이라면 한 질문/절차/개념만 담고 있는가?
3. 상위 source note와 provenance가 연결되어 있는가?
4. 나중에 다른 path에서 재사용할 수 있는가?
5. 같은 내용을 이미 다른 note에 써놓지 않았는가?

---

## 이 프로젝트용 최종 문장
이 위키에서 제텔카스텐은
**"한 문서 = 한 생각"** 보다 조금 더 정확하게,

> **한 md = 한 주소**  
> **한 atomic md = 한 재사용 가능한 생각 단위**  
> **모든 atomic md는 정부 원문에서 파생된 permanent note**

로 운영하는 것이 맞다.
