# link manifest — 행정안전부·인사혁신처·기획재정부 live layer 파일럿 (2026-04)

- type: link-manifest
- based on: `link-schema-관보-보도자료-2026-04.md`
- external layers: `gov-press-md`, `gov-gazette-md`, `ai-readable-government`
- scope: existing newcomer wiki note에 바로 붙일 수 있는 first pilot candidate set
- selection rule: **기존 note와 직접 연결되는 주제 우선 / 각 기관 4~8건 내외 / press와 gazette 역할 분리**

## 이 문서의 목적
설계 문서(`link-schema-관보-보도자료-2026-04.md`)를 실제 삽입 후보 세트로 내린다.
이번 manifest는 아직 기관 note가 없다는 점을 감안해, **현재 이미 존재하는 source / process / concept note 중심**으로 target을 잡았다.

## 파일럿 요약
- total records: **20**
- press: **10**
- gazette: **10**
- target notes touched: **12**

### 기관별 건수
- `행정안전부` — 5건 (press 2, gazette 3)
- `인사혁신처` — 8건 (press 4, gazette 4)
- `기획재정부` — 7건 (press 4, gazette 3)

## 행정안전부

### 추천 target notes
- `[[concept-정부업무시스템-국민신문고]]`
- `[[process-국민신문고-민원상담에서민원신청까지]]`
- `[[process-정보공개청구-신규자-기본흐름]]`
- `[[source-행정안전부-정보공개포털]]`

### press
- **12/05/2024 12:00:00** — `supports-faq` — [[국민과 공무원 모두 안심할 수 있는 민원환경 조성한 유공자 첫 포상]]
  - repo: `gov-press-md`
  - record path: `data/2024/2024-12/2024-12-05/060_행정안전부_국민과_공무원_모두_안심할_수_있는_민원환경_조성한_유공자_첫_포상.md`
  - github: https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-05/060_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%EA%B5%AD%EB%AF%BC%EA%B3%BC_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EB%AA%A8%EB%91%90_%EC%95%88%EC%8B%AC%ED%95%A0_%EC%88%98_%EC%9E%88%EB%8A%94_%EB%AF%BC%EC%9B%90%ED%99%98%EA%B2%BD_%EC%A1%B0%EC%84%B1%ED%95%9C_%EC%9C%A0%EA%B3%B5%EC%9E%90_%EC%B2%AB_%ED%8F%AC%EC%83%81.md
  - original url: https://www.korea.kr/briefing/pressReleaseView.do?newsId=156664201&call_from=openData
  - target notes: `concept-정부업무시스템-국민신문고.md`, `process-국민신문고-민원상담에서민원신청까지.md`
  - topic tags: `민원`, `국민신문고`, `민원보호`
  - why linked: 민원환경과 민원담당자 보호를 다루는 보도자료라서 국민신문고/민원대응 축의 현재형 맥락을 보강한다.
- **12/23/2025 16:00:00** — `shows-current-issue` — [[국민 중심의 민원행정, 함께 만드는 행복한 정부]]
  - repo: `gov-press-md`
  - record path: `data/2025/2025-12/2025-12-23/143_행정안전부_국민_중심의_민원행정_함께_만드는_행복한_정부.md`
  - github: https://github.com/hosungseo/gov-press-md/blob/main/data/2025/2025-12/2025-12-23/143_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%EA%B5%AD%EB%AF%BC_%EC%A4%91%EC%8B%AC%EC%9D%98_%EB%AF%BC%EC%9B%90%ED%96%89%EC%A0%95_%ED%95%A8%EA%BB%98_%EB%A7%8C%EB%93%9C%EB%8A%94_%ED%96%89%EB%B3%B5%ED%95%9C_%EC%A0%95%EB%B6%80.md
  - original url: https://www.korea.kr/briefing/pressReleaseView.do?newsId=156736539&call_from=openData
  - target notes: `concept-정부업무시스템-국민신문고.md`, `process-국민신문고-민원상담에서민원신청까지.md`
  - topic tags: `민원`, `민원행정`
  - why linked: 국민신문고/민원행정 note에 최신 정책 프레이밍을 붙이는 대표 press 후보다.

### gazette
- **2026.03.30** — `changes-rule` — [[행정안전부고시제2026-19호(민원처리기준표 일부개정고시)]]
  - repo: `gov-gazette-md`
  - record path: `data/2026/2026-03/2026-03-30/077_행정안전부_행정안전부고시제2026_19호_민원처리기준표_일부개정고시.md`
  - github: https://github.com/hosungseo/gov-gazette-md/blob/main/data/2026/2026-03/2026-03-30/077_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%A0%EC%8B%9C%EC%A0%9C2026_19%ED%98%B8_%EB%AF%BC%EC%9B%90%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%A4%80%ED%91%9C_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EA%B3%A0%EC%8B%9C.md
  - pdf url: https://gwanbo.go.kr/ezpdf/customLayout.jsp?contentId=I0000000000000001774509097892000&tocId=I0000000000000001774311870360000&isTocOrder=N&name=%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%A0%EC%8B%9C%EC%A0%9C2026-19%ED%98%B8%28%EB%AF%BC%EC%9B%90%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%A4%80%ED%91%9C+%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EA%B3%A0%EC%8B%9C%29
  - readable-final: `readable-final/2026-03-30/077_행정안전부_행정안전부고시제2026_19호_민원처리기준표_일부개정고시.md`
  - readable github: https://github.com/hosungseo/gov-gazette-md/blob/main/readable-final/2026-03-30/077_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%A0%EC%8B%9C%EC%A0%9C2026_19%ED%98%B8_%EB%AF%BC%EC%9B%90%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%A4%80%ED%91%9C_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EA%B3%A0%EC%8B%9C.md
  - target notes: `process-국민신문고-민원상담에서민원신청까지.md`, `process-정보공개청구-신규자-기본흐름.md`
  - topic tags: `민원`, `기준`, `절차`
  - why linked: 민원 처리 실무의 기준표 자체가 바뀌는 기록이라서 메뉴 수준이 아니라 workflow-level note에 붙일 가치가 높다.
- **2026.02.19** — `changes-rule` — [[행정안전부공고제2026-230호(「민원 처리에 관한 법률 시행령」 일부개정령안 입법예고)]]
  - repo: `gov-gazette-md`
  - record path: `data/2026/2026-02/2026-02-19/139_행정안전부_행정안전부공고제2026_230호_민원_처리에_관한_법률_시행령_일부개정령안_입법예고.md`
  - github: https://github.com/hosungseo/gov-gazette-md/blob/main/data/2026/2026-02/2026-02-19/139_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%B5%EA%B3%A0%EC%A0%9C2026_230%ED%98%B8_%EB%AF%BC%EC%9B%90_%EC%B2%98%EB%A6%AC%EC%97%90_%EA%B4%80%ED%95%9C_%EB%B2%95%EB%A5%A0_%EC%8B%9C%ED%96%89%EB%A0%B9_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md
  - pdf url: https://gwanbo.go.kr/ezpdf/customLayout.jsp?contentId=I0000000000000001770941933815000&tocId=I0000000000000001770798362898000&isTocOrder=N&name=%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%B5%EA%B3%A0%EC%A0%9C2026-230%ED%98%B8%28%E3%80%8C%EB%AF%BC%EC%9B%90+%EC%B2%98%EB%A6%AC%EC%97%90+%EA%B4%80%ED%95%9C+%EB%B2%95%EB%A5%A0+%EC%8B%9C%ED%96%89%EB%A0%B9%E3%80%8D+%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88+%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0%29
  - readable-final: `readable-final/2026-02-19/139_행정안전부_행정안전부공고제2026_230호_민원_처리에_관한_법률_시행령_일부개정령안_입법예고.md`
  - readable github: https://github.com/hosungseo/gov-gazette-md/blob/main/readable-final/2026-02-19/139_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%B5%EA%B3%A0%EC%A0%9C2026_230%ED%98%B8_%EB%AF%BC%EC%9B%90_%EC%B2%98%EB%A6%AC%EC%97%90_%EA%B4%80%ED%95%9C_%EB%B2%95%EB%A5%A0_%EC%8B%9C%ED%96%89%EB%A0%B9_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md
  - target notes: `process-국민신문고-민원상담에서민원신청까지.md`, `process-정보공개청구-신규자-기본흐름.md`
  - topic tags: `민원`, `시행령`, `입법예고`
  - why linked: 민원 처리 법령 레벨의 변경 신호라서 민원/정보공개 프로세스 note의 최근 변화 블록에 적합하다.
- **2026.04.01** — `changes-rule` — [[행정안전부공고제2026-429호(전자정부법 시행령 일부개정령안 입법예고)]]
  - repo: `gov-gazette-md`
  - record path: `data/2026/2026-04/2026-04-01/066_행정안전부_행정안전부공고제2026_429호_전자정부법_시행령_일부개정령안_입법예고.md`
  - github: https://github.com/hosungseo/gov-gazette-md/blob/main/data/2026/2026-04/2026-04-01/066_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%B5%EA%B3%A0%EC%A0%9C2026_429%ED%98%B8_%EC%A0%84%EC%9E%90%EC%A0%95%EB%B6%80%EB%B2%95_%EC%8B%9C%ED%96%89%EB%A0%B9_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md
  - pdf url: https://gwanbo.go.kr/ezpdf/customLayout.jsp?contentId=I0000000000000001774854547948000&tocId=I0000000000000001774244755895000&isTocOrder=N&name=%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%B5%EA%B3%A0%EC%A0%9C2026-429%ED%98%B8%28%EC%A0%84%EC%9E%90%EC%A0%95%EB%B6%80%EB%B2%95+%EC%8B%9C%ED%96%89%EB%A0%B9+%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88+%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0%29
  - readable-final: `readable-final/2026-04-01/066_행정안전부_행정안전부공고제2026_429호_전자정부법_시행령_일부개정령안_입법예고.md`
  - readable github: https://github.com/hosungseo/gov-gazette-md/blob/main/readable-final/2026-04-01/066_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%B5%EA%B3%A0%EC%A0%9C2026_429%ED%98%B8_%EC%A0%84%EC%9E%90%EC%A0%95%EB%B6%80%EB%B2%95_%EC%8B%9C%ED%96%89%EB%A0%B9_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md
  - target notes: `source-행정안전부-정보공개포털.md`, `process-정보공개청구-신규자-기본흐름.md`
  - topic tags: `전자정부`, `시스템`, `정보공개`
  - why linked: 전자정부 계열 제도 변화는 정보공개 포털과 시스템 축 note에 직접 연결되는 최근성 레이어다.


## 인사혁신처

### 추천 target notes
- `[[concept-신규공무원-인사적응-핵심축]]`
- `[[concept-공무원-복무]]`
- `[[concept-공무원-성과관리]]`
- `[[concept-공무원-보수]]`
- `[[concept-공무원-징계]]`

### press
- **12/16/2024 14:00:00** — `supports-faq` — [[(인재정책과) 신규 공무원 공직 적응 선배가 돕는다]]
  - repo: `gov-press-md`
  - record path: `data/2024/2024-12/2024-12-16/086_인사혁신처_인재정책과_신규_공무원_공직_적응_선배가_돕는다.md`
  - github: https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-16/086_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%9E%AC%EC%A0%95%EC%B1%85%EA%B3%BC_%EC%8B%A0%EA%B7%9C_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EA%B3%B5%EC%A7%81_%EC%A0%81%EC%9D%91_%EC%84%A0%EB%B0%B0%EA%B0%80_%EB%8F%95%EB%8A%94%EB%8B%A4.md
  - original url: https://www.korea.kr/briefing/pressReleaseView.do?newsId=156665849&call_from=openData
  - target notes: `concept-신규공무원-인사적응-핵심축.md`
  - topic tags: `신규적응`, `멘토링`, `인사적응`
  - why linked: 신규 공무원 적응 자체를 직접 다루는 보도자료라 newcomer wiki의 인사적응 축에 가장 바로 붙는다.
- **12/31/2024 17:30:00** — `explains-policy` — [[(인사혁신기획과) 공무원 육아휴직 전 기간, 승진경력 인정？]]
  - repo: `gov-press-md`
  - record path: `data/2024/2024-12/2024-12-31/083_인사혁신처_인사혁신기획과_공무원_육아휴직_전_기간_승진경력_인정.md`
  - github: https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-31/083_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EA%B8%B0%ED%9A%8D%EA%B3%BC_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EC%9C%A1%EC%95%84%ED%9C%B4%EC%A7%81_%EC%A0%84_%EA%B8%B0%EA%B0%84_%EC%8A%B9%EC%A7%84%EA%B2%BD%EB%A0%A5_%EC%9D%B8%EC%A0%95.md
  - original url: https://www.korea.kr/briefing/pressReleaseView.do?newsId=156668524&call_from=openData
  - target notes: `concept-공무원-복무.md`, `concept-신규공무원-인사적응-핵심축.md`
  - topic tags: `복무`, `승진`, `육아휴직`
  - why linked: 복무·승진·양육지원이 한 문서에 함께 들어 있어 복무 note와 인사적응 note를 동시에 보강한다.
- **09/30/2025 14:00:00** — `explains-policy` — [['공무원 성과관리 연말 일회성 평가 벗어나야']]
  - repo: `gov-press-md`
  - record path: `data/2025/2025-09/2025-09-30/111_인사혁신처_공무원_성과관리_연말_일회성_평가_벗어나야.md`
  - github: https://github.com/hosungseo/gov-press-md/blob/main/data/2025/2025-09/2025-09-30/111_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EC%84%B1%EA%B3%BC%EA%B4%80%EB%A6%AC_%EC%97%B0%EB%A7%90_%EC%9D%BC%ED%9A%8C%EC%84%B1_%ED%8F%89%EA%B0%80_%EB%B2%97%EC%96%B4%EB%82%98%EC%95%BC.md
  - original url: https://www.korea.kr/briefing/pressReleaseView.do?newsId=156717762&call_from=openData
  - target notes: `concept-공무원-성과관리.md`
  - topic tags: `성과관리`, `평가`
  - why linked: 성과관리를 단발성 평정이 아니라 상시적 성장·관리 구조로 읽게 해주는 설명성 press다.
- **12/31/2024 17:30:00** — `explains-policy` — [[(성과급여과) 2025년 공무원보수규정 및 수당규정 개정]]
  - repo: `gov-press-md`
  - record path: `data/2024/2024-12/2024-12-31/082_인사혁신처_성과급여과_2025년_공무원보수규정_및_수당규정_개정.md`
  - github: https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-31/082_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%84%B1%EA%B3%BC%EA%B8%89%EC%97%AC%EA%B3%BC_2025%EB%85%84_%EA%B3%B5%EB%AC%B4%EC%9B%90%EB%B3%B4%EC%88%98%EA%B7%9C%EC%A0%95_%EB%B0%8F_%EC%88%98%EB%8B%B9%EA%B7%9C%EC%A0%95_%EA%B0%9C%EC%A0%95.md
  - original url: https://www.korea.kr/briefing/pressReleaseView.do?newsId=156668522&call_from=openData
  - target notes: `concept-공무원-보수.md`
  - topic tags: `보수`, `수당`
  - why linked: 보수·수당 제도 변경을 직접 설명하는 press라 보수 note의 live layer로 적합하다.

### gazette
- **2026.04.07** — `changes-rule` — [[인사혁신처공고제2026-193호(「국가공무원 복무규정」 일부개정령안 입법예고)]]
  - repo: `gov-gazette-md`
  - record path: `data/2026/2026-04/2026-04-07/017_인사혁신처_인사혁신처공고제2026_193호_국가공무원_복무규정_일부개정령안_입법예고.md`
  - github: https://github.com/hosungseo/gov-gazette-md/blob/main/data/2026/2026-04/2026-04-07/017_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%EC%A0%9C2026_193%ED%98%B8_%EA%B5%AD%EA%B0%80%EA%B3%B5%EB%AC%B4%EC%9B%90_%EB%B3%B5%EB%AC%B4%EA%B7%9C%EC%A0%95_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md
  - pdf url: https://gwanbo.go.kr/ezpdf/customLayout.jsp?contentId=I0000000000000001775436831612000&tocId=I0000000000000001775016093528000&isTocOrder=N&name=%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%EC%A0%9C2026-193%ED%98%B8%28%E3%80%8C%EA%B5%AD%EA%B0%80%EA%B3%B5%EB%AC%B4%EC%9B%90+%EB%B3%B5%EB%AC%B4%EA%B7%9C%EC%A0%95%E3%80%8D+%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88+%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0%29
  - readable-final: `readable-final/2026-04-07/017_인사혁신처_인사혁신처공고제2026_193호_국가공무원_복무규정_일부개정령안_입법예고.md`
  - readable github: https://github.com/hosungseo/gov-gazette-md/blob/main/readable-final/2026-04-07/017_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%EC%A0%9C2026_193%ED%98%B8_%EA%B5%AD%EA%B0%80%EA%B3%B5%EB%AC%B4%EC%9B%90_%EB%B3%B5%EB%AC%B4%EA%B7%9C%EC%A0%95_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md
  - target notes: `concept-공무원-복무.md`
  - topic tags: `복무`, `입법예고`
  - why linked: 복무 note에 가장 직접적으로 연결되는 공식 변경 기록이다.
- **2025.12.31** — `changes-rule` — [[인사혁신처공고제2025-451호(「공무원 성과평가 등에 관한 규정」 일부개정령안 입법예고)]]
  - repo: `gov-gazette-md`
  - record path: `data/2025/2025-12/2025-12-31/267_인사혁신처_인사혁신처공고제2025_451호_공무원_성과평가_등에_관한_규정_일부개정령안_입법예고.md`
  - github: https://github.com/hosungseo/gov-gazette-md/blob/main/data/2025/2025-12/2025-12-31/267_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_451%ED%98%B8_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EC%84%B1%EA%B3%BC%ED%8F%89%EA%B0%80_%EB%93%B1%EC%97%90_%EA%B4%80%ED%95%9C_%EA%B7%9C%EC%A0%95_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md
  - pdf url: https://gwanbo.go.kr/ezpdf/customLayout.jsp?contentId=I0000000000000001766993705099000&tocId=I0000000000000001766711976318000&isTocOrder=N&name=%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%EC%A0%9C2025-451%ED%98%B8%28%E3%80%8C%EA%B3%B5%EB%AC%B4%EC%9B%90+%EC%84%B1%EA%B3%BC%ED%8F%89%EA%B0%80+%EB%93%B1%EC%97%90+%EA%B4%80%ED%95%9C+%EA%B7%9C%EC%A0%95%E3%80%8D+%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88+%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0%29
  - readable-final: `readable-final/2025-12-31/267_인사혁신처_인사혁신처공고제2025_451호_공무원_성과평가_등에_관한_규정_일부개정령안_입법예고.md`
  - readable github: https://github.com/hosungseo/gov-gazette-md/blob/main/readable-final/2025-12-31/267_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_451%ED%98%B8_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EC%84%B1%EA%B3%BC%ED%8F%89%EA%B0%80_%EB%93%B1%EC%97%90_%EA%B4%80%ED%95%9C_%EA%B7%9C%EC%A0%95_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md
  - target notes: `concept-공무원-성과관리.md`
  - topic tags: `성과관리`, `입법예고`
  - why linked: 성과관리 note를 제도 변경 레벨의 근거와 연결하는 가장 직접적인 gazette다.
- **2025.12.19** — `changes-rule` — [[인사혁신처공고제2025-444호(「공무원수당 등에 관한 규정」 일부개정령안 입법예고)]]
  - repo: `gov-gazette-md`
  - record path: `data/2025/2025-12/2025-12-19/109_인사혁신처_인사혁신처공고제2025_444호_공무원수당_등에_관한_규정_일부개정령안_입법예고.md`
  - github: https://github.com/hosungseo/gov-gazette-md/blob/main/data/2025/2025-12/2025-12-19/109_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_444%ED%98%B8_%EA%B3%B5%EB%AC%B4%EC%9B%90%EC%88%98%EB%8B%B9_%EB%93%B1%EC%97%90_%EA%B4%80%ED%95%9C_%EA%B7%9C%EC%A0%95_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md
  - pdf url: https://gwanbo.go.kr/ezpdf/customLayout.jsp?contentId=I0000000000000001765955419384000&tocId=I0000000000000001765868954983000&isTocOrder=N&name=%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%EC%A0%9C2025-444%ED%98%B8%28%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%29
  - readable-final: `readable-final/2025-12-19/109_인사혁신처_인사혁신처공고제2025_444호_공무원수당_등에_관한_규정_일부개정령안_입법예고.md`
  - readable github: https://github.com/hosungseo/gov-gazette-md/blob/main/readable-final/2025-12-19/109_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_444%ED%98%B8_%EA%B3%B5%EB%AC%B4%EC%9B%90%EC%88%98%EB%8B%B9_%EB%93%B1%EC%97%90_%EA%B4%80%ED%95%9C_%EA%B7%9C%EC%A0%95_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md
  - target notes: `concept-공무원-보수.md`
  - topic tags: `보수`, `수당`
  - why linked: 보수 note에 수당 규정 변경의 공식 기록을 붙이는 용도다.
- **2025.12.30** — `changes-rule` — [[총리령제2080호(공무원 징계령 시행규칙 일부개정령)]]
  - repo: `gov-gazette-md`
  - record path: `data/2025/2025-12/2025-12-30/321_인사혁신처_총리령제2080호_공무원_징계령_시행규칙_일부개정령.md`
  - github: https://github.com/hosungseo/gov-gazette-md/blob/main/data/2025/2025-12/2025-12-30/321_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%B4%9D%EB%A6%AC%EB%A0%B9%EC%A0%9C2080%ED%98%B8_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EC%A7%95%EA%B3%84%EB%A0%B9_%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9.md
  - pdf url: https://gwanbo.go.kr/ezpdf/customLayout.jsp?contentId=I0000000000000001766995549472000&tocId=I0000000000000001766561392649000&isTocOrder=N&name=%EC%B4%9D%EB%A6%AC%EB%A0%B9%EC%A0%9C2080%ED%98%B8%28%EA%B3%B5%EB%AC%B4%EC%9B%90+%EC%A7%95%EA%B3%84%EB%A0%B9+%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99+%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%29
  - readable-final: `readable-final/2025-12-30/321_인사혁신처_총리령제2080호_공무원_징계령_시행규칙_일부개정령.md`
  - readable github: https://github.com/hosungseo/gov-gazette-md/blob/main/readable-final/2025-12-30/321_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%B4%9D%EB%A6%AC%EB%A0%B9%EC%A0%9C2080%ED%98%B8_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EC%A7%95%EA%B3%84%EB%A0%B9_%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9.md
  - target notes: `concept-공무원-징계.md`
  - topic tags: `징계`
  - why linked: 징계 note에 바로 얹을 수 있는 공식 규정 변경 기록이다.


## 기획재정부

### 추천 target notes
- `[[process-신규자-예산이해-기본흐름]]`
- `[[source-기획재정부-예산안편성지침-및-기준]]`
- `[[source-기획재정부-2024-나라살림-예산개요]]`

### press
- **12/31/2024 00:00:00** — `recommended-reading` — [[2025년도 예산 및 기금운용계획 집행지침 통보]]
  - repo: `gov-press-md`
  - record path: `data/2024/2024-12/2024-12-31/005_기획재정부_2025년도_예산_및_기금운용계획_집행지침_통보.md`
  - github: https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-31/005_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_2025%EB%85%84%EB%8F%84_%EC%98%88%EC%82%B0_%EB%B0%8F_%EA%B8%B0%EA%B8%88%EC%9A%B4%EC%9A%A9%EA%B3%84%ED%9A%8D_%EC%A7%91%ED%96%89%EC%A7%80%EC%B9%A8_%ED%86%B5%EB%B3%B4.md
  - original url: https://www.korea.kr/briefing/pressReleaseView.do?newsId=156668446&call_from=openData
  - target notes: `process-신규자-예산이해-기본흐름.md`, `source-기획재정부-예산안편성지침-및-기준.md`
  - topic tags: `예산`, `집행`, `기금`
  - why linked: 편성 단계 source에서 집행 단계 source로 내려가는 newcomer 흐름을 보강해 준다.
- **12/17/2024 00:00:00** — `explains-policy` — [[2025년도 예산배정계획 확정]]
  - repo: `gov-press-md`
  - record path: `data/2024/2024-12/2024-12-17/004_기획재정부_2025년도_예산배정계획_확정.md`
  - github: https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-17/004_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_2025%EB%85%84%EB%8F%84_%EC%98%88%EC%82%B0%EB%B0%B0%EC%A0%95%EA%B3%84%ED%9A%8D_%ED%99%95%EC%A0%95.md
  - original url: https://www.korea.kr/briefing/pressReleaseView.do?newsId=156666037&call_from=openData
  - target notes: `process-신규자-예산이해-기본흐름.md`
  - topic tags: `예산`, `배정`
  - why linked: 편성 이후 배정 단계가 어떻게 이어지는지 보여주는 실무 연결점이다.
- **12/24/2024 00:00:00** — `explains-policy` — [[’25년 성과관리, 저성과 사업 지출효율화 등 성과기반의 재정운용 확산에 중점]]
  - repo: `gov-press-md`
  - record path: `data/2024/2024-12/2024-12-24/006_기획재정부_25년_성과관리_저성과_사업_지출효율화_등_성과기반의_재정운용_확산에_중점.md`
  - github: https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-24/006_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_25%EB%85%84_%EC%84%B1%EA%B3%BC%EA%B4%80%EB%A6%AC_%EC%A0%80%EC%84%B1%EA%B3%BC_%EC%82%AC%EC%97%85_%EC%A7%80%EC%B6%9C%ED%9A%A8%EC%9C%A8%ED%99%94_%EB%93%B1_%EC%84%B1%EA%B3%BC%EA%B8%B0%EB%B0%98%EC%9D%98_%EC%9E%AC%EC%A0%95%EC%9A%B4%EC%9A%A9_%ED%99%95%EC%82%B0%EC%97%90_%EC%A4%91%EC%A0%90.md
  - original url: https://www.korea.kr/briefing/pressReleaseView.do?newsId=156667228&call_from=openData
  - target notes: `process-신규자-예산이해-기본흐름.md`, `source-기획재정부-2024-나라살림-예산개요.md`
  - topic tags: `예산`, `성과관리`, `재정운용`
  - why linked: 예산을 단순 편성·집행이 아니라 성과기반 재정운용으로 읽게 해주는 설명성 press다.
- **12/10/2024 00:00:00** — `announces-program` — [[2025년 예산 국회 확정]]
  - repo: `gov-press-md`
  - record path: `data/2024/2024-12/2024-12-10/007_기획재정부_2025년_예산_국회_확정.md`
  - github: https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-10/007_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_2025%EB%85%84_%EC%98%88%EC%82%B0_%EA%B5%AD%ED%9A%8C_%ED%99%95%EC%A0%95.md
  - original url: https://www.korea.kr/briefing/pressReleaseView.do?newsId=156664977&call_from=openData
  - target notes: `process-신규자-예산이해-기본흐름.md`
  - topic tags: `예산`, `국회확정`
  - why linked: 편성 문서와 실제 확정 단계 사이를 잇는 정치·절차적 마일스톤이다.

### gazette
- **2025.12.19** — `announces-effective-date` — [[대통령공고제2025-367호(2026년도 예산 공고)]]
  - repo: `gov-gazette-md`
  - record path: `data/2025/2025-12/2025-12-19/040_기획재정부_대통령공고제2025_367호_2026년도_예산_공고.md`
  - github: https://github.com/hosungseo/gov-gazette-md/blob/main/data/2025/2025-12/2025-12-19/040_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_367%ED%98%B8_2026%EB%85%84%EB%8F%84_%EC%98%88%EC%82%B0_%EA%B3%B5%EA%B3%A0.md
  - pdf url: https://gwanbo.go.kr/ezpdf/customLayout.jsp?contentId=I0000000000000001765957086889000&tocId=I0000000000000001765775866376000&isTocOrder=N&name=%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%EC%A0%9C2025-367%ED%98%B8%28%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%29
  - readable-final: `readable-final/2025-12-19/040_기획재정부_대통령공고제2025_367호_2026년도_예산_공고.md`
  - readable github: https://github.com/hosungseo/gov-gazette-md/blob/main/readable-final/2025-12-19/040_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_367%ED%98%B8_2026%EB%85%84%EB%8F%84_%EC%98%88%EC%82%B0_%EA%B3%B5%EA%B3%A0.md
  - target notes: `process-신규자-예산이해-기본흐름.md`
  - topic tags: `예산`, `공고`
  - why linked: 예산 확정 이후 관보 공고까지 이어지는 공식 기록 레이어다.
- **2025.12.19** — `announces-effective-date` — [[대통령공고제2025-368호(2026년도 기금운용계획 공고)]]
  - repo: `gov-gazette-md`
  - record path: `data/2025/2025-12/2025-12-19/041_기획재정부_대통령공고제2025_368호_2026년도_기금운용계획_공고.md`
  - github: https://github.com/hosungseo/gov-gazette-md/blob/main/data/2025/2025-12/2025-12-19/041_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_368%ED%98%B8_2026%EB%85%84%EB%8F%84_%EA%B8%B0%EA%B8%88%EC%9A%B4%EC%9A%A9%EA%B3%84%ED%9A%8D_%EA%B3%B5%EA%B3%A0.md
  - pdf url: https://gwanbo.go.kr/ezpdf/customLayout.jsp?contentId=I0000000000000001765957086889000&tocId=I0000000000000001765777618672000&isTocOrder=N&name=%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%EC%A0%9C2025-368%ED%98%B8%28%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%29
  - readable-final: `readable-final/2025-12-19/041_기획재정부_대통령공고제2025_368호_2026년도_기금운용계획_공고.md`
  - readable github: https://github.com/hosungseo/gov-gazette-md/blob/main/readable-final/2025-12-19/041_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_368%ED%98%B8_2026%EB%85%84%EB%8F%84_%EA%B8%B0%EA%B8%88%EC%9A%B4%EC%9A%A9%EA%B3%84%ED%9A%8D_%EA%B3%B5%EA%B3%A0.md
  - target notes: `process-신규자-예산이해-기본흐름.md`
  - topic tags: `기금`, `공고`
  - why linked: 예산과 함께 기금운용계획도 newcomer budget path에 묶어 보여줄 필요가 있다.
- **2025.07.11** — `changes-rule` — [[대통령공고제2025-363호(2025년도 제2회 추가경정예산 공고)]]
  - repo: `gov-gazette-md`
  - record path: `data/2025/2025-07/2025-07-11/043_기획재정부_대통령공고제2025_363호_2025년도_제2회_추가경정예산_공고.md`
  - github: https://github.com/hosungseo/gov-gazette-md/blob/main/data/2025/2025-07/2025-07-11/043_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_363%ED%98%B8_2025%EB%85%84%EB%8F%84_%EC%A0%9C2%ED%9A%8C_%EC%B6%94%EA%B0%80%EA%B2%BD%EC%A0%95%EC%98%88%EC%82%B0_%EA%B3%B5%EA%B3%A0.md
  - pdf url: https://gwanbo.go.kr/ezpdf/customLayout.jsp?contentId=I0000000000000001752048612637000&tocId=I0000000000000001751954474867000&isTocOrder=N&name=%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%EC%A0%9C2025-363%ED%98%B8%28%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%29
  - readable-final: `readable-final/2025-07-11/043_기획재정부_대통령공고제2025_363호_2025년도_제2회_추가경정예산_공고.md`
  - readable github: https://github.com/hosungseo/gov-gazette-md/blob/main/readable-final/2025-07-11/043_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_363%ED%98%B8_2025%EB%85%84%EB%8F%84_%EC%A0%9C2%ED%9A%8C_%EC%B6%94%EA%B0%80%EA%B2%BD%EC%A0%95%EC%98%88%EC%82%B0_%EA%B3%B5%EA%B3%A0.md
  - target notes: `process-신규자-예산이해-기본흐름.md`
  - topic tags: `추경`, `예산`
  - why linked: 정규 예산만이 아니라 추경이 예산 흐름의 중요한 분기라는 점을 live layer에서 보여준다.

## note별 first attachment candidates

### `[[concept-공무원-보수]]`
- press candidates:
  - 12/31/2024 17:30:00 / `인사혁신처` / `explains-policy` / [(성과급여과) 2025년 공무원보수규정 및 수당규정 개정](https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-31/082_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%84%B1%EA%B3%BC%EA%B8%89%EC%97%AC%EA%B3%BC_2025%EB%85%84_%EA%B3%B5%EB%AC%B4%EC%9B%90%EB%B3%B4%EC%88%98%EA%B7%9C%EC%A0%95_%EB%B0%8F_%EC%88%98%EB%8B%B9%EA%B7%9C%EC%A0%95_%EA%B0%9C%EC%A0%95.md)
- gazette candidates:
  - 2025.12.19 / `인사혁신처` / `changes-rule` / [인사혁신처공고제2025-444호(「공무원수당 등에 관한 규정」 일부개정령안 입법예고)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2025/2025-12/2025-12-19/109_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_444%ED%98%B8_%EA%B3%B5%EB%AC%B4%EC%9B%90%EC%88%98%EB%8B%B9_%EB%93%B1%EC%97%90_%EA%B4%80%ED%95%9C_%EA%B7%9C%EC%A0%95_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md)
- memo: 이 note에는 우선 위 1~2건만 `최근 관련 관보/보도자료` 블록으로 얇게 붙이는 것이 적당하다.

### `[[concept-공무원-복무]]`
- press candidates:
  - 12/31/2024 17:30:00 / `인사혁신처` / `explains-policy` / [(인사혁신기획과) 공무원 육아휴직 전 기간, 승진경력 인정？](https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-31/083_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EA%B8%B0%ED%9A%8D%EA%B3%BC_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EC%9C%A1%EC%95%84%ED%9C%B4%EC%A7%81_%EC%A0%84_%EA%B8%B0%EA%B0%84_%EC%8A%B9%EC%A7%84%EA%B2%BD%EB%A0%A5_%EC%9D%B8%EC%A0%95.md)
- gazette candidates:
  - 2026.04.07 / `인사혁신처` / `changes-rule` / [인사혁신처공고제2026-193호(「국가공무원 복무규정」 일부개정령안 입법예고)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2026/2026-04/2026-04-07/017_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%EC%A0%9C2026_193%ED%98%B8_%EA%B5%AD%EA%B0%80%EA%B3%B5%EB%AC%B4%EC%9B%90_%EB%B3%B5%EB%AC%B4%EA%B7%9C%EC%A0%95_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md)
- memo: 이 note에는 우선 위 1~2건만 `최근 관련 관보/보도자료` 블록으로 얇게 붙이는 것이 적당하다.

### `[[concept-공무원-성과관리]]`
- press candidates:
  - 09/30/2025 14:00:00 / `인사혁신처` / `explains-policy` / ['공무원 성과관리 연말 일회성 평가 벗어나야'](https://github.com/hosungseo/gov-press-md/blob/main/data/2025/2025-09/2025-09-30/111_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EC%84%B1%EA%B3%BC%EA%B4%80%EB%A6%AC_%EC%97%B0%EB%A7%90_%EC%9D%BC%ED%9A%8C%EC%84%B1_%ED%8F%89%EA%B0%80_%EB%B2%97%EC%96%B4%EB%82%98%EC%95%BC.md)
- gazette candidates:
  - 2025.12.31 / `인사혁신처` / `changes-rule` / [인사혁신처공고제2025-451호(「공무원 성과평가 등에 관한 규정」 일부개정령안 입법예고)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2025/2025-12/2025-12-31/267_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_451%ED%98%B8_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EC%84%B1%EA%B3%BC%ED%8F%89%EA%B0%80_%EB%93%B1%EC%97%90_%EA%B4%80%ED%95%9C_%EA%B7%9C%EC%A0%95_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md)
- memo: 이 note에는 우선 위 1~2건만 `최근 관련 관보/보도자료` 블록으로 얇게 붙이는 것이 적당하다.

### `[[concept-공무원-징계]]`
- gazette candidates:
  - 2025.12.30 / `인사혁신처` / `changes-rule` / [총리령제2080호(공무원 징계령 시행규칙 일부개정령)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2025/2025-12/2025-12-30/321_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%B4%9D%EB%A6%AC%EB%A0%B9%EC%A0%9C2080%ED%98%B8_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EC%A7%95%EA%B3%84%EB%A0%B9_%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9.md)
- memo: 이 note에는 우선 위 1~2건만 `최근 관련 관보/보도자료` 블록으로 얇게 붙이는 것이 적당하다.

### `[[concept-신규공무원-인사적응-핵심축]]`
- press candidates:
  - 12/16/2024 14:00:00 / `인사혁신처` / `supports-faq` / [(인재정책과) 신규 공무원 공직 적응 선배가 돕는다](https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-16/086_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%9E%AC%EC%A0%95%EC%B1%85%EA%B3%BC_%EC%8B%A0%EA%B7%9C_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EA%B3%B5%EC%A7%81_%EC%A0%81%EC%9D%91_%EC%84%A0%EB%B0%B0%EA%B0%80_%EB%8F%95%EB%8A%94%EB%8B%A4.md)
  - 12/31/2024 17:30:00 / `인사혁신처` / `explains-policy` / [(인사혁신기획과) 공무원 육아휴직 전 기간, 승진경력 인정？](https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-31/083_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EC%B2%98_%EC%9D%B8%EC%82%AC%ED%98%81%EC%8B%A0%EA%B8%B0%ED%9A%8D%EA%B3%BC_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EC%9C%A1%EC%95%84%ED%9C%B4%EC%A7%81_%EC%A0%84_%EA%B8%B0%EA%B0%84_%EC%8A%B9%EC%A7%84%EA%B2%BD%EB%A0%A5_%EC%9D%B8%EC%A0%95.md)
- memo: 이 note에는 우선 위 1~2건만 `최근 관련 관보/보도자료` 블록으로 얇게 붙이는 것이 적당하다.

### `[[concept-정부업무시스템-국민신문고]]`
- press candidates:
  - 12/05/2024 12:00:00 / `행정안전부` / `supports-faq` / [국민과 공무원 모두 안심할 수 있는 민원환경 조성한 유공자 첫 포상](https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-05/060_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%EA%B5%AD%EB%AF%BC%EA%B3%BC_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EB%AA%A8%EB%91%90_%EC%95%88%EC%8B%AC%ED%95%A0_%EC%88%98_%EC%9E%88%EB%8A%94_%EB%AF%BC%EC%9B%90%ED%99%98%EA%B2%BD_%EC%A1%B0%EC%84%B1%ED%95%9C_%EC%9C%A0%EA%B3%B5%EC%9E%90_%EC%B2%AB_%ED%8F%AC%EC%83%81.md)
  - 12/23/2025 16:00:00 / `행정안전부` / `shows-current-issue` / [국민 중심의 민원행정, 함께 만드는 행복한 정부](https://github.com/hosungseo/gov-press-md/blob/main/data/2025/2025-12/2025-12-23/143_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%EA%B5%AD%EB%AF%BC_%EC%A4%91%EC%8B%AC%EC%9D%98_%EB%AF%BC%EC%9B%90%ED%96%89%EC%A0%95_%ED%95%A8%EA%BB%98_%EB%A7%8C%EB%93%9C%EB%8A%94_%ED%96%89%EB%B3%B5%ED%95%9C_%EC%A0%95%EB%B6%80.md)
- memo: 이 note에는 우선 위 1~2건만 `최근 관련 관보/보도자료` 블록으로 얇게 붙이는 것이 적당하다.

### `[[process-국민신문고-민원상담에서민원신청까지]]`
- press candidates:
  - 12/05/2024 12:00:00 / `행정안전부` / `supports-faq` / [국민과 공무원 모두 안심할 수 있는 민원환경 조성한 유공자 첫 포상](https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-05/060_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%EA%B5%AD%EB%AF%BC%EA%B3%BC_%EA%B3%B5%EB%AC%B4%EC%9B%90_%EB%AA%A8%EB%91%90_%EC%95%88%EC%8B%AC%ED%95%A0_%EC%88%98_%EC%9E%88%EB%8A%94_%EB%AF%BC%EC%9B%90%ED%99%98%EA%B2%BD_%EC%A1%B0%EC%84%B1%ED%95%9C_%EC%9C%A0%EA%B3%B5%EC%9E%90_%EC%B2%AB_%ED%8F%AC%EC%83%81.md)
  - 12/23/2025 16:00:00 / `행정안전부` / `shows-current-issue` / [국민 중심의 민원행정, 함께 만드는 행복한 정부](https://github.com/hosungseo/gov-press-md/blob/main/data/2025/2025-12/2025-12-23/143_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%EA%B5%AD%EB%AF%BC_%EC%A4%91%EC%8B%AC%EC%9D%98_%EB%AF%BC%EC%9B%90%ED%96%89%EC%A0%95_%ED%95%A8%EA%BB%98_%EB%A7%8C%EB%93%9C%EB%8A%94_%ED%96%89%EB%B3%B5%ED%95%9C_%EC%A0%95%EB%B6%80.md)
- gazette candidates:
  - 2026.03.30 / `행정안전부` / `changes-rule` / [행정안전부고시제2026-19호(민원처리기준표 일부개정고시)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2026/2026-03/2026-03-30/077_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%A0%EC%8B%9C%EC%A0%9C2026_19%ED%98%B8_%EB%AF%BC%EC%9B%90%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%A4%80%ED%91%9C_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EA%B3%A0%EC%8B%9C.md)
  - 2026.02.19 / `행정안전부` / `changes-rule` / [행정안전부공고제2026-230호(「민원 처리에 관한 법률 시행령」 일부개정령안 입법예고)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2026/2026-02/2026-02-19/139_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%B5%EA%B3%A0%EC%A0%9C2026_230%ED%98%B8_%EB%AF%BC%EC%9B%90_%EC%B2%98%EB%A6%AC%EC%97%90_%EA%B4%80%ED%95%9C_%EB%B2%95%EB%A5%A0_%EC%8B%9C%ED%96%89%EB%A0%B9_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md)
- memo: 이 note에는 우선 위 1~2건만 `최근 관련 관보/보도자료` 블록으로 얇게 붙이는 것이 적당하다.

### `[[process-신규자-예산이해-기본흐름]]`
- press candidates:
  - 12/31/2024 00:00:00 / `기획재정부` / `recommended-reading` / [2025년도 예산 및 기금운용계획 집행지침 통보](https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-31/005_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_2025%EB%85%84%EB%8F%84_%EC%98%88%EC%82%B0_%EB%B0%8F_%EA%B8%B0%EA%B8%88%EC%9A%B4%EC%9A%A9%EA%B3%84%ED%9A%8D_%EC%A7%91%ED%96%89%EC%A7%80%EC%B9%A8_%ED%86%B5%EB%B3%B4.md)
  - 12/17/2024 00:00:00 / `기획재정부` / `explains-policy` / [2025년도 예산배정계획 확정](https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-17/004_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_2025%EB%85%84%EB%8F%84_%EC%98%88%EC%82%B0%EB%B0%B0%EC%A0%95%EA%B3%84%ED%9A%8D_%ED%99%95%EC%A0%95.md)
  - 12/24/2024 00:00:00 / `기획재정부` / `explains-policy` / [’25년 성과관리, 저성과 사업 지출효율화 등 성과기반의 재정운용 확산에 중점](https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-24/006_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_25%EB%85%84_%EC%84%B1%EA%B3%BC%EA%B4%80%EB%A6%AC_%EC%A0%80%EC%84%B1%EA%B3%BC_%EC%82%AC%EC%97%85_%EC%A7%80%EC%B6%9C%ED%9A%A8%EC%9C%A8%ED%99%94_%EB%93%B1_%EC%84%B1%EA%B3%BC%EA%B8%B0%EB%B0%98%EC%9D%98_%EC%9E%AC%EC%A0%95%EC%9A%B4%EC%9A%A9_%ED%99%95%EC%82%B0%EC%97%90_%EC%A4%91%EC%A0%90.md)
  - 12/10/2024 00:00:00 / `기획재정부` / `announces-program` / [2025년 예산 국회 확정](https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-10/007_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_2025%EB%85%84_%EC%98%88%EC%82%B0_%EA%B5%AD%ED%9A%8C_%ED%99%95%EC%A0%95.md)
- gazette candidates:
  - 2025.12.19 / `기획재정부` / `announces-effective-date` / [대통령공고제2025-367호(2026년도 예산 공고)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2025/2025-12/2025-12-19/040_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_367%ED%98%B8_2026%EB%85%84%EB%8F%84_%EC%98%88%EC%82%B0_%EA%B3%B5%EA%B3%A0.md)
  - 2025.12.19 / `기획재정부` / `announces-effective-date` / [대통령공고제2025-368호(2026년도 기금운용계획 공고)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2025/2025-12/2025-12-19/041_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_368%ED%98%B8_2026%EB%85%84%EB%8F%84_%EA%B8%B0%EA%B8%88%EC%9A%B4%EC%9A%A9%EA%B3%84%ED%9A%8D_%EA%B3%B5%EA%B3%A0.md)
  - 2025.07.11 / `기획재정부` / `changes-rule` / [대통령공고제2025-363호(2025년도 제2회 추가경정예산 공고)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2025/2025-07/2025-07-11/043_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_%EB%8C%80%ED%86%B5%EB%A0%B9%EA%B3%B5%EA%B3%A0%EC%A0%9C2025_363%ED%98%B8_2025%EB%85%84%EB%8F%84_%EC%A0%9C2%ED%9A%8C_%EC%B6%94%EA%B0%80%EA%B2%BD%EC%A0%95%EC%98%88%EC%82%B0_%EA%B3%B5%EA%B3%A0.md)
- memo: 이 note에는 우선 위 1~2건만 `최근 관련 관보/보도자료` 블록으로 얇게 붙이는 것이 적당하다.

### `[[process-정보공개청구-신규자-기본흐름]]`
- gazette candidates:
  - 2026.03.30 / `행정안전부` / `changes-rule` / [행정안전부고시제2026-19호(민원처리기준표 일부개정고시)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2026/2026-03/2026-03-30/077_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%A0%EC%8B%9C%EC%A0%9C2026_19%ED%98%B8_%EB%AF%BC%EC%9B%90%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%A4%80%ED%91%9C_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EA%B3%A0%EC%8B%9C.md)
  - 2026.02.19 / `행정안전부` / `changes-rule` / [행정안전부공고제2026-230호(「민원 처리에 관한 법률 시행령」 일부개정령안 입법예고)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2026/2026-02/2026-02-19/139_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%B5%EA%B3%A0%EC%A0%9C2026_230%ED%98%B8_%EB%AF%BC%EC%9B%90_%EC%B2%98%EB%A6%AC%EC%97%90_%EA%B4%80%ED%95%9C_%EB%B2%95%EB%A5%A0_%EC%8B%9C%ED%96%89%EB%A0%B9_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md)
  - 2026.04.01 / `행정안전부` / `changes-rule` / [행정안전부공고제2026-429호(전자정부법 시행령 일부개정령안 입법예고)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2026/2026-04/2026-04-01/066_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%B5%EA%B3%A0%EC%A0%9C2026_429%ED%98%B8_%EC%A0%84%EC%9E%90%EC%A0%95%EB%B6%80%EB%B2%95_%EC%8B%9C%ED%96%89%EB%A0%B9_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md)
- memo: 이 note에는 우선 위 1~2건만 `최근 관련 관보/보도자료` 블록으로 얇게 붙이는 것이 적당하다.

### `[[source-기획재정부-2024-나라살림-예산개요]]`
- press candidates:
  - 12/24/2024 00:00:00 / `기획재정부` / `explains-policy` / [’25년 성과관리, 저성과 사업 지출효율화 등 성과기반의 재정운용 확산에 중점](https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-24/006_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_25%EB%85%84_%EC%84%B1%EA%B3%BC%EA%B4%80%EB%A6%AC_%EC%A0%80%EC%84%B1%EA%B3%BC_%EC%82%AC%EC%97%85_%EC%A7%80%EC%B6%9C%ED%9A%A8%EC%9C%A8%ED%99%94_%EB%93%B1_%EC%84%B1%EA%B3%BC%EA%B8%B0%EB%B0%98%EC%9D%98_%EC%9E%AC%EC%A0%95%EC%9A%B4%EC%9A%A9_%ED%99%95%EC%82%B0%EC%97%90_%EC%A4%91%EC%A0%90.md)
- memo: 이 note에는 우선 위 1~2건만 `최근 관련 관보/보도자료` 블록으로 얇게 붙이는 것이 적당하다.

### `[[source-기획재정부-예산안편성지침-및-기준]]`
- press candidates:
  - 12/31/2024 00:00:00 / `기획재정부` / `recommended-reading` / [2025년도 예산 및 기금운용계획 집행지침 통보](https://github.com/hosungseo/gov-press-md/blob/main/data/2024/2024-12/2024-12-31/005_%EA%B8%B0%ED%9A%8D%EC%9E%AC%EC%A0%95%EB%B6%80_2025%EB%85%84%EB%8F%84_%EC%98%88%EC%82%B0_%EB%B0%8F_%EA%B8%B0%EA%B8%88%EC%9A%B4%EC%9A%A9%EA%B3%84%ED%9A%8D_%EC%A7%91%ED%96%89%EC%A7%80%EC%B9%A8_%ED%86%B5%EB%B3%B4.md)
- memo: 이 note에는 우선 위 1~2건만 `최근 관련 관보/보도자료` 블록으로 얇게 붙이는 것이 적당하다.

### `[[source-행정안전부-정보공개포털]]`
- gazette candidates:
  - 2026.04.01 / `행정안전부` / `changes-rule` / [행정안전부공고제2026-429호(전자정부법 시행령 일부개정령안 입법예고)](https://github.com/hosungseo/gov-gazette-md/blob/main/data/2026/2026-04/2026-04-01/066_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80_%ED%96%89%EC%A0%95%EC%95%88%EC%A0%84%EB%B6%80%EA%B3%B5%EA%B3%A0%EC%A0%9C2026_429%ED%98%B8_%EC%A0%84%EC%9E%90%EC%A0%95%EB%B6%80%EB%B2%95_%EC%8B%9C%ED%96%89%EB%A0%B9_%EC%9D%BC%EB%B6%80%EA%B0%9C%EC%A0%95%EB%A0%B9%EC%95%88_%EC%9E%85%EB%B2%95%EC%98%88%EA%B3%A0.md)
- memo: 이 note에는 우선 위 1~2건만 `최근 관련 관보/보도자료` 블록으로 얇게 붙이는 것이 적당하다.

## 바로 다음 적용 순서
1. `process-신규자-예산이해-기본흐름.md`에 기재부 press/gazette 4~5건 중 상위 3건만 삽입
2. `concept-공무원-복무.md`, `concept-공무원-성과관리.md`, `concept-공무원-보수.md`, `concept-공무원-징계.md`에 인사혁신처 live block 삽입
3. `concept-정부업무시스템-국민신문고.md`, `process-국민신문고-민원상담에서민원신청까지.md`, `process-정보공개청구-신규자-기본흐름.md`에 행안부 live block 삽입
4. 이후 기관 note(행정안전부 / 인사혁신처 / 기획재정부)를 만들면 이 manifest를 그대로 재사용
