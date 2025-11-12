import "../../styles/OLED/slide6.css";

export function OLEDSlide6() {
  return (
    <section data-slide="6">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>
        <div className="px-16 pt-10">
          <h1 className="content-title text-4xl mb-2">
            <span className="qled-accent">Advantages</span> v/s{" "}
            <span className="qled-accent">Disadvantages</span>
          </h1>
        </div>
        <div className="flex-grow px-16 py-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="tech-card p-6 delay-100">
              <div className="tech-icon">
                <i className="fas fa-lightbulb text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 qled-accent">
                Key Advantages
              </h3>
              <p className="text-gray-300 mb-4">
                Thinner, lighter, flexible displays with high contrast, true
                blacks, vibrant colors, wide viewing angles, and fast response
                times.
              </p>
            </div>
            <div className="tech-card p-6 delay-200">
              <div className="tech-icon">
                <i className="fas fa-microchip text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 qled-accent">
                Main Disadvantages
              </h3>
              <p className="text-gray-300 mb-4">
                Shorter lifespan for blue OLEDs, water damage susceptibility,
                higher manufacturing costs, and potential for burn-in effects.
              </p>
            </div>
            <div className="tech-card p-6 delay-300">
              <div className="tech-icon">
                <i className="fas fa-layer-group text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 qled-accent">
                Technical Challenges
              </h3>
              <p className="text-gray-300 mb-4">
                Manufacturing complexity, material degradation over time, and
                the need for protective encapsulation against environmental
                factors.
              </p>
            </div>
            <div className="tech-card p-6 delay-400">
              <div className="tech-icon">
                <i className="fas fa-layer-group text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 qled-accent">
                Performance Benefits
              </h3>
              <div className="flex">
                <div className="w-full pr-4">
                  <p className="text-gray-300 mb-3">
                    Superior image quality with infinite contrast ratio, perfect
                    black levels, and exceptional color accuracy for
                    professional applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
