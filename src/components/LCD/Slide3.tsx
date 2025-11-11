import "../../styles/LCD/slide3.css";

export function LCDSlide3() {
  return (
    <section data-slide="3">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>
        <div className="px-16 pt-12 mb-7">
          <h1 className="section-title text-4xl mb-2">
            Classification of{" "}
            <span className="qled-accent">Liquid Crystals</span>
          </h1>
        </div>
        <div className="flex-grow px-20 py-4">
          <div className="grid grid-cols-1 gap-6">
            <div className="phases-container">
              <div className="phase-card">
                <h2 className="phase-header">Nematic Phase</h2>
                <div className="phase-visual">
                  <div className="nematic-lines">
                    <div className="nematic-line"></div>
                    <div className="nematic-line"></div>
                    <div className="nematic-line"></div>
                    <div className="nematic-line"></div>
                    <div className="nematic-line"></div>
                  </div>
                </div>
                <ul className="phase-description">
                  <li>
                    Molecules are aligned parallel but not arranged in layers
                  </li>
                  <li>Most commonly used in LCD displays</li>
                  <li>Order Level: Lowest</li>
                  <li>Applications: Standard LCD displays</li>
                </ul>
              </div>

              <div className="phase-card">
                <h2 className="phase-header">Smectic Phase</h2>
                <div className="phase-visual">
                  <div className="smectic-layers">
                    <div className="smectic-layer"></div>
                    <div className="smectic-layer"></div>
                    <div className="smectic-layer"></div>
                  </div>
                </div>
                <ul className="phase-description">
                  <li>Molecules are aligned and arranged in distinct layers</li>
                  <li>More ordered structure than nematic phase</li>
                  <li>Order Level: Medium</li>
                  <li>Applications: High-precision displays</li>
                </ul>
              </div>

              <div className="phase-card">
                <h2 className="phase-header">Cholesteric Phase</h2>
                <div className="phase-visual">
                  <div className="cholesteric-waves">
                    <div className="cholesteric-wave">
                      <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                        <path d="M 0 10 Q 25 4 50 10 T 100 10 T 150 10 T 200 10" />
                      </svg>
                    </div>
                    <div className="cholesteric-wave">
                      <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                        <path d="M 0 10 Q 25 4 50 10 T 100 10 T 150 10 T 200 10" />
                      </svg>
                    </div>
                    <div className="cholesteric-wave">
                      <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                        <path d="M 0 10 Q 25 4 50 10 T 100 10 T 150 10 T 200 10" />
                      </svg>
                    </div>
                    <div className="cholesteric-wave">
                      <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                        <path d="M 0 10 Q 25 4 50 10 T 100 10 T 150 10 T 200 10" />
                      </svg>
                    </div>
                  </div>
                </div>
                <ul className="phase-description">
                  <li>Molecules arranged in helical structures</li>
                  <li>
                    Can selectively reflect light (used in displays,
                    thermometers)
                  </li>
                  <li>Order Level: Highest</li>
                  <li>Applications: Color-changing displays, thermometers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
