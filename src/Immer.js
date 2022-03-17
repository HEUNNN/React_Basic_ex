import produce from "immer";

const originalState = [
  {
    id: 1,
    todo: "전개 연산자와 배열 내장 함수로 불변성 유지하기",
    checked: true,
  },
  {
    id: 2,
    todo: "immer로 불변성 유지하기",
    checked: false,
  },
];

const nextState = produce(originalState, (draft) => {
  //id가 2인 항목의 checked 값을 true로 설정
  const todo = draft.find((v) => v.id === 2);
  todo.checked = true;
  //혹은 draft[0].checked = true

  //배열에 새로운 데이터 추가
  draft.push({
    //draft 라서 불변성을 유지시켜주기 때문에 바로 push해도 괜찮다.
    id: 3,
    todo: "일정 관리 앱에 immer 적용하기",
    checked: false,
  });

  //id가 1인 항목 제거하기
  draft.splice(
    draft.findIndex((t) => t.id === 1),
    1
  );
});
