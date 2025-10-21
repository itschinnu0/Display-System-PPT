import "../../styles/QLED/slide4.css";

export function QLEDSlide4() {
  return (
    <section data-slide="4">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        <div className="px-16 pt-10">
          <h1 className="content-title text-4xl mb-2">
            The Science of <span className="qled-accent">Quantum Dots</span>
          </h1>
        </div>

        <div className="flex-grow px-16 py-4">
          <div className="flex flex-row space-x-8">
            {/* <div className="w-1/2 h-1/2">
              <div className="quantum-dot-diagram flex items-center justify-center">
                <img
                  alt="Quantum Dot Structure"
                  className="object-contain"
                  src="./unnamed.jpg"
                />
              </div>
            </div> */}
            <div className="h-1/4">
              <div className="info-card delay-100">
                <h3 className="text-xl font-semibold qled-accent">
                  Quantum Confinement Effect
                </h3>
                <p className="text-gray-300 mt-1">
                  When semiconductor materials are reduced to nanoscale
                  dimensions (2-10 nanometers), electrons become confined in a
                  "quantum box" smaller than their natural orbit radius.
                </p>
              </div>
              <div className="info-card delay-200">
                <h3 className="text-xl font-semibold qled-accent">
                  Size-Dependent Properties
                </h3>
                <p className="text-gray-300 mt-1">
                  As quantum dot size decreases, the energy gap increases,
                  resulting in bluer light emission. Larger quantum dots emit
                  redder colors.
                </p>
              </div>
              <div className="info-card delay-300">
                <h3 className="text-xl font-semibold qled-accent">
                  Precise Color Control
                </h3>
                <p className="text-gray-300 mt-1">
                  This size-tunable property allows manufacturers to precisely
                  control emission colors by adjusting quantum dot diameter
                  during synthesis.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 bg-opacity-50 bg-gray-800 p-4 rounded-lg">
            <h3 className="text-center text-xl mb-2">
              Quantum Dot Size &amp; Color Relationship
            </h3>
            <div className="quantum-dot-size">
              <div className="flex flex-col items-center delay-400">
                <div className="dot dot-small">2nm</div>
                <p className="mt-2 text-center">
                  Blue Light
                  <br />
                  (450-495nm)
                </p>
              </div>
              <div className="arrow-connection">⇄</div>
              <div className="flex flex-col items-center delay-500">
                <div className="dot dot-medium">5nm</div>
                <p className="mt-2 text-center">
                  Green Light
                  <br />
                  (495-570nm)
                </p>
              </div>
              <div className="arrow-connection">⇄</div>
              <div className="flex flex-col items-center delay-600">
                <div className="dot dot-large">8nm</div>
                <p className="mt-2 text-center">
                  Red Light
                  <br />
                  (620-750nm)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-16 py-4 mb-2">
          <p className="content-subtitle text-sm text-gray-400 text-center">
            Quantum dots' precisely tunable light emission enables QLED's
            exceptional color performance
          </p>
        </div>
      </div>
    </section>
  );
}
