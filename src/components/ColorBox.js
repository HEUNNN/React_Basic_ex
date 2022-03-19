import { ColorConsumer } from "../contexts/ColorContext";
//context 파일에서 값을 받아와서 사용하는 컴포넌트 -> Consumer
const ColorBox = () => {
  return (
    <ColorConsumer>
      {(value) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.color,
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: value.state.subcolor,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};
export default ColorBox;
