import "../../styles/QLED/slide2.css";

export function QLEDSlide2() {
  return (
    <section data-slide="2">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        <div className="px-16 pt-12">
          <h1 className="section-title text-4xl mb-2">
            Executive Summary:{" "}
            <span className="qled-accent">The QLED Edge</span>
          </h1>
          <p className="section-subtitle text-lg text-gray-300 mb-8">
            QLED (Quantum Dot Light Emitting Diode) display technology combines
            advanced physics with revolutionary manufacturing
          </p>
        </div>

        <div className="flex-grow px-16 py-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="advantage-card p-5 rounded-lg delay-100">
              <div className="flex items-start mb-2">
                <i className="advantage-icon fas fa-sun text-2xl mr-3 mt-1"></i>
                <h3 className="text-xl font-semibold">
                  Industry-Leading Brightness
                </h3>
              </div>
              <p className="text-gray-300">
                Up to 4,000 nits peak brightness, ideal for HDR content and
                bright room viewing
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-200">
              <div className="flex items-start mb-2">
                <i className="advantage-icon fas fa-palette text-2xl mr-3 mt-1"></i>
                <h3 className="text-xl font-semibold">
                  Unmatched Color Accuracy
                </h3>
              </div>
              <p className="text-gray-300">
                100% color volume with precise quantum dot emission for
                cinema-quality visuals
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-300">
              <div className="flex items-start mb-2">
                <i className="advantage-icon fas fa-shield-alt text-2xl mr-3 mt-1"></i>
                <h3 className="text-xl font-semibold">
                  Superior Burn-in Resistance
                </h3>
              </div>
              <p className="text-gray-300">
                Inorganic quantum dots provide exceptional durability with no
                permanent image retention
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-400">
              <div className="flex items-start mb-2">
                <i className="advantage-icon fas fa-hourglass-half text-2xl mr-3 mt-1"></i>
                <h3 className="text-xl font-semibold">Extended Lifespan</h3>
              </div>
              <p className="text-gray-300">
                Longer operational lifespan than competing technologies with
                consistent performance
              </p>
            </div>
          </div>
        </div>
        <div className="px-16 py-4 mt-2">
          <p className="section-subtitle text-gray-400 text-center">
            QLED bridges the performance gap between LCDs and OLEDs, driving
            innovation across consumer and professional displays
          </p>
        </div>
      </div>

      {/* Speaker Notes */}
      <aside className="notes">
        <h3>Speaker Notes for Slide 2:</h3>
        <ul>
          <li>
            QLED displays combine advanced quantum dot physics with cutting-edge
            manufacturing, giving them a clear edge in modern display
            technology.
          </li>
          <li>
            They deliver industry-leading brightness, reaching up to 4,000
            nits—ideal for HDR and bright rooms. Color accuracy is superb, with
            100% color volume for cinema-quality visuals.
          </li>
          <li>
            Thanks to inorganic quantum dots, QLED is immune to burn-in and has
            a longer lifespan than OLED, maintaining top performance over time.
          </li>
          <li>
            Overall, QLED bridges the gap between LCDs and OLEDs, driving
            innovation for both consumers and professionals.
          </li>
        </ul>
      </aside>
    </section>
  );
}
