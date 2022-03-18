import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/ColorContext";

function App() {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
}
export default App;
