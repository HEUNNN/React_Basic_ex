import { ColorConsumer } from "../contexts/ColorContext";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColor = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {(value) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  width: "24px",
                  height: "24px",
                  background: color,
                  cursor: "pointer",
                }}
                onClick={() => value.action.setColor(color)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  value.action.setSubColor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};
export default SelectColor;
