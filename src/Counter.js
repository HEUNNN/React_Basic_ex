import React, { useState } from "react";
import OddEvenRes from "./OddEvenRes";

const Counter = ({ initialValue }) => {
  // 0에서 출발하고
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태
  const [count, setCount] = useState(initialValue); //useState()메서드는 react의 메서드

  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenRes count={count} />
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 5,
};

export default Counter;
