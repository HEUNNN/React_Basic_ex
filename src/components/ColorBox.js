import { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/ColorContext";
//context 파일에서 값을 받아와서 사용하는 컴포넌트 -> Consumer
const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
};
export default ColorBox;
