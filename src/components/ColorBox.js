import ColorContexts from "../contexts/colors";

const ColorBox = () => {
  return (
    <ColorContexts.Consumer>
      {(value) => (
        <div
          style={{ width: "64px", height: "64px", background: value.color }}
        />
      )}
    </ColorContexts.Consumer>
  );
};
export default ColorBox;
