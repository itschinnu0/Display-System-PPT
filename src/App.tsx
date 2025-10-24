import "./App.css";
import { RevealProvider } from "./providers/Reveal";
import { QLEDSlide1 } from "./components/QLED/Slide1";
import { QLEDSlide2 } from "./components/QLED/Slide2";
import { QLEDSlide3 } from "./components/QLED/Slide3";
import { QLEDSlide4 } from "./components/QLED/Slide4";
import { QLEDSlide5 } from "./components/QLED/Slide5";
import { QLEDSlide6 } from "./components/QLED/Slide6";
import { QLEDSlide7 } from "./components/QLED/Slide7";
import { QLEDSlide8 } from "./components/QLED/Slide8";
import { QLEDSlide9 } from "./components/QLED/Slide9";
import { QLEDSlide10 } from "./components/QLED/Slide10";
import { QLEDSlide11 } from "./components/QLED/Slide11";
import { QLEDSlide12 } from "./components/QLED/Slide12";
import { OLEDSlide1 } from "./components/OLED/Slide1";
import { OLEDSlide2 } from "./components/OLED/Slide2";
import { OLEDSlide3 } from "./components/OLED/Slide3";
import { OLEDSlide4 } from "./components/OLED/Slide4";
import { OLEDSlide5 } from "./components/OLED/Slide5";
import { OLEDSlide6 } from "./components/OLED/Slide6";
import { LCDSlide1 } from "./components/LCD/Slide1";
import { LCDSlide2 } from "./components/LCD/Slide2";
import { LCDSlide3 } from "./components/LCD/Slide3";
import { LCDSlide4 } from "./components/LCD/Slide4";
import { LCDSlide5 } from "./components/LCD/Slide5";
import { LCDSlide6 } from "./components/LCD/Slide6";
import { LCDSlide7 } from "./components/LCD/Slide7";

function App() {
  return (
    <div className="app">
      <RevealProvider>
        <LCDSlide1 />
        <LCDSlide2 />
        <LCDSlide3 />
        <LCDSlide4 />
        <LCDSlide5 />
        <LCDSlide6 />
        <LCDSlide7 />
        <OLEDSlide1 />
        <OLEDSlide2 />
        <OLEDSlide3 />
        <OLEDSlide4 />
        <OLEDSlide5 />
        <OLEDSlide6 />
        <QLEDSlide1 />
        <QLEDSlide2 />
        <QLEDSlide3 />
        <QLEDSlide4 />
        <QLEDSlide5 />
        <QLEDSlide6 />
        <QLEDSlide7 />
        <QLEDSlide8 />
        <QLEDSlide9 />
        <QLEDSlide10 />
        <QLEDSlide11 />
        <QLEDSlide12 />
      </RevealProvider>
    </div>
  );
}

export default App;
