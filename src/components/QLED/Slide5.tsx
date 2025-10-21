import "../../styles/QLED/slide5.css";

export function QLEDSlide5() {
  return (
    <section data-slide="5">
        <div className="slide-container flex flex-col">
      <div className="background-overlay"></div>
      <div className="tech-circle tech-circle-1"></div>
      <div className="tech-circle tech-circle-2"></div>
      <div className="px-16 pt-10">
        <h1 className="content-title text-4xl mb-2">
          Inside the <span className="qled-accent">QLED</span>: Display Architecture
        </h1>
        <p className="content-subtitle text-lg text-gray-300 mb-6">
          How quantum dot technology transforms conventional displays into
          vibrant color machines
        </p>
      </div>
      <div className="flex-grow px-16 py-2 flex">
        <div className="w-1/2 flex items-center justify-center">
          <div className="layer-diagram">
            <div className="diagram-layer layer-1">Blue LED Backlight</div>
            <div className="diagram-layer layer-2">
              Quantum Dot Enhancement Film (QDEF)
            </div>
            <div className="diagram-layer layer-3">LCD Panel</div>
            <div className="diagram-layer layer-4">Color Filters</div>
            <div className="diagram-layer layer-5">Polarizers &amp; TFT Array</div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="layer-item delay-100">
            <div className="layer-number">1</div>
            <h3 className="text-lg font-semibold">Blue LED Backlight</h3>
            <p className="text-gray-300">
              Energy source that provides blue light for the quantum dot
              conversion process
            </p>
          </div>
          <div className="layer-item delay-200">
            <div className="layer-number">2</div>
            <h3 className="text-lg font-semibold">Quantum Dot Enhancement Film</h3>
            <p className="text-gray-300">
              Contains quantum dots that convert blue light to pure red and
              green wavelengths
            </p>
          </div>
          <div className="layer-item delay-300">
            <div className="layer-number">3</div>
            <h3 className="text-lg font-semibold">LCD Panel</h3>
            <p className="text-gray-300">
              Controls light transmission to create the image pixels
            </p>
          </div>
          <div className="layer-item delay-400">
            <div className="layer-number">4</div>
            <h3 className="text-lg font-semibold">Color Filters</h3>
            <p className="text-gray-300">
              Traditional RGB filters for final color production and refinement
            </p>
          </div>
          <div className="layer-item delay-500">
            <div className="layer-number">5</div>
            <h3 className="text-lg font-semibold">Polarizers &amp; TFT Array</h3>
            <p className="text-gray-300">
              Standard LCD components for light management and pixel control
            </p>
          </div>
        </div>
      </div>
      <div className="px-16 py-2 mb-4">
        <p className="content-subtitle text-sm text-gray-400 text-center">
          This hybrid architecture enables QLED displays to achieve 100% color
          volume and support wide DCI-P3 color gamut standards
        </p>
      </div>
    </div>
    </section>
  );
}