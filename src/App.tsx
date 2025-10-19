import "./App.css";
import { RevealProvider } from "./providers/Reveal";
import { Slide1 } from "./components/QLED/Slide1";
import { Slide2 } from "./components/QLED/Slide2";
import { Slide3 } from "./components/QLED/Slide3";

function App() {
  return (
    <div className="app">
      <RevealProvider>
        <Slide1 />
        <Slide2 />
        <Slide3 />
      </RevealProvider>
    </div>
  );
}

export default App;
