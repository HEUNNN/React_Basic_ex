import { createContext, useState } from "react";

//context 파일
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  action: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("orange");
  const [subcolor, setSubcolor] = useState("yellow");

  const value = {
    state: { color, subcolor },
    action: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
const { Consumer: ColorConsumer } = ColorContext;
//const ColorConsumer = ColorContext.Consumer와 같은 의미
export { ColorProvider, ColorConsumer };
export default ColorContext;
