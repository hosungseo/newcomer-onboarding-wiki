# 홍보대응·법령대응 노출 gap audit 2026-05

latest commit d35b422에서 추가된 홍보대응·법령대응 실행경계 노트는 루트 route와 개별 노트 사이의 내부 연결은 생겼지만, 신규자가 실제로 들어오는 hub·coverage·manifest 층에서는 아직 직접 노출되지 않는다.

## 확인한 신규 노트

- [[walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05]]
- [[checklist-홍보대응-초안공개전환-문장별-precheck]]
- [[faq-홍보대응-보도문의-공식답변은-어디서-멈추나]]
- [[checklist-법령대응-공개설명-법무precheck]]
- [[source-법령대응-공개설명-출처우선순위]]
- [[faq-법령대응-의견조회-대외답변은-어디까지-가능한가]]

## 다음에 노출할 정확한 기존 파일

1. [[hub-홍보대응]]
   - `walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05.md`와 `faq-홍보대응-보도문의-공식답변은-어디서-멈추나.md`를 홍보대응 대외문안 진입점으로 노출한다.
2. [[hub-법령대응]]
   - `walkthrough-홍보대응-법령대응-실행경계-라우트맵-2026-05.md`, `checklist-법령대응-공개설명-법무precheck.md`, `source-법령대응-공개설명-출처우선순위.md`를 공개설명 경계 진입점으로 노출한다.
3. [[coverage-홍보대응-boundary-router-질문형-검토-2026-05]]
   - 홍보 문안 전환 질문에서 `checklist-홍보대응-초안공개전환-문장별-precheck.md`와 `faq-홍보대응-보도문의-공식답변은-어디서-멈추나.md`로 이어지는 노출선을 추가한다.
4. [[coverage-법령대응-공개설명경계-2026-05]]
   - 법령 공개설명 질문에서 `checklist-법령대응-공개설명-법무precheck.md`, `source-법령대응-공개설명-출처우선순위.md`, `faq-법령대응-의견조회-대외답변은-어디까지-가능한가.md`를 직접 드러낸다.
5. [[manifest-newcomer-journey-홍보대응-2026-05]]
   - 홍보대응 journey 산출물 묶음에 신규 FAQ·checklist·walkthrough 3개를 포함한다.
6. [[manifest-newcomer-journey-법령대응-공개설명경계-2026-05]]
   - 법령대응 공개설명 journey 산출물 묶음에 신규 source·FAQ·checklist·walkthrough 4개를 포함한다.

## 멈춤선

- README.md, docs/index.html, landing-* 파일, graph/data 파일은 이번 lane에서 수정하지 않는다.
- route-map 본문을 다시 두껍게 만들지 말고, 노출은 hub·coverage·manifest의 짧은 링크 추가로 제한한다.
- 내부검토·비공개협의·미확정 조문안·법률자문성 결론·현장 발언의 단정적 인용은 홍보/법령 대외문안 노출선에 올리지 않는다.
- 존재하지 않는 placeholder wikilink를 만들지 않는다.
