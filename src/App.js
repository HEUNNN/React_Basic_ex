import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/colors";

function App() {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <h2>Context API 예제</h2>
      <ColorBox />
    </ColorContext.Provider>
  );
}
export default App;
