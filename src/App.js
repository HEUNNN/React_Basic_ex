import ColorBox from "./components/ColorBox";
import SelectColor from "./components/SelectColor";
import { ColorProvider } from "./contexts/ColorContext";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}
export default App;
