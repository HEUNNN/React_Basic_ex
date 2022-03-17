import { useCallback, useRef, useState } from "react";
import produce from "immer";
const ImmerExam = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  //input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target; //비구조화 할당
      //name = e.target.name , value = e.target.value

      /*
        setForm({
          ...form,
          [name]: [value],
        });
        */

      setForm(
        produce((draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  //form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      //array에 새 항목 등록
      /*
        setData({
          ...data,
          array: data.array.concat(info),
        });
        */

      setData(
        produce((draft) => {
          draft.array.push(info);
          //draft["array"].push(info);
        })
      );

      //form 초기화
      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  //항목을 삭제하는 함수
  const onRemove = useCallback(
    (targetId) => {
      /*
        setData({
          ...data,
          array: data.array.filter((v) => v.id !== targetId),
        });
        */

      setData(
        produce((draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === targetId),
            1
          );
        })
      );
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ImmerExam;