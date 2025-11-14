import "../../styles/LCD/slide4.css";

export function LCDSlide4() {
  return (
    <section data-slide="4">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        <div className="px-16 pt-12">
          <h1 className="section-title text-4xl mb-2">
            <span className="qled-accent">Properties and Applications</span> of
            LCDs
          </h1>
        </div>

        <div className="flex-grow px-16 py-4">
          <div className="grid grid-cols-2 gap-6 h-full">
            <div className="col-span-1">
              <div className="advantage-card delay-100 h-full">
                <div className="advantage-metric">Properties</div>
                <ul className="text-gray-300 text-xl mt-6 mb-6">
                  <li className="flex items-center m-4">
                    <h3 className="text-xl mr-2 text-blue-300">📱</h3>
                    Thin and Lightweight
                  </li>
                  <li className="flex items-center m-4">
                    <h3 className="text-xl mr-2 text-blue-300">⚡</h3>
                    Low Power Consumption
                  </li>
                  <li className="flex items-center m-4">
                    <h3 className="text-xl mr-2 text-blue-300">💻</h3>
                    Flat Panel Technology
                  </li>
                  <li className="flex items-center m-4">
                    <h3 className="text-xl mr-2 text-blue-300">🎯</h3>
                    Good Resolution
                  </li>
                  <li className="flex items-center m-4">
                    <h3 className="text-xl mr-2 text-blue-300">🌗</h3>
                    Adjustable Brightness & Contrast
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-1">
              <div className="grid grid-rows-1 gap-6 h-full">
                <div className="advantage-card delay-200">
                  <div className="advantage-metric">Applications</div>
                  <ul className="text-gray-300 text-xl mt-6 mb-6">
                    <li className="flex items-center m-4">
                      <h3 className="text-xl mr-2 text-blue-300">🖥️</h3>
                      Display Devices
                    </li>
                    <li className="flex items-center m-4">
                      <h3 className="text-xl mr-2 text-blue-300">📊</h3>
                      Measuring Instruments
                    </li>
                    <li className="flex items-center m-4">
                      <h3 className="text-xl mr-2 text-blue-300">💊</h3>
                      Medical Equipment
                    </li>
                    <li className="flex items-center m-4">
                      <h3 className="text-xl mr-2 text-blue-300">🔋</h3>
                      Battery-operated Devices
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
