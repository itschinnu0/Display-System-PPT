import "../../styles/QLED/slide3.css";

export function QLEDSlide3() {
  return (
    <section data-slide="3">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>
        <div className="px-16 pt-10">
          <h1 className="content-title text-4xl mb-2">
            Pioneers &amp; Progress:
            <span className="qled-accent"> Historical Milestones</span>
          </h1>
          <p className="content-subtitle text-lg text-gray-300 mb-6">
            The evolution of QLED technology from scientific discovery to
            commercial success
          </p>
        </div>
        <div className="flex-grow px-16 py-2">
          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-item delay-100">
              <div className="timeline-year">1981</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="text-lg font-semibold">
                  Quantum Dots Discovered
                </h3>
                <p className="text-gray-300">
                  Alexei Ekimov, Alexander Efros, and Louis Brus discover and
                  develop quantum dot technology
                </p>
              </div>
            </div>
            <div className="timeline-item delay-200">
              <div className="timeline-year">2001</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="text-lg font-semibold">
                  Samsung Research Begins
                </h3>
                <p className="text-gray-300">
                  Samsung initiates quantum dot research program for display
                  applications
                </p>
              </div>
            </div>
            <div className="timeline-item delay-300">
              <div className="timeline-year">2013</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="text-lg font-semibold">First QD Display</h3>
                <p className="text-gray-300">
                  Sony introduces first quantum dot-enhanced Triluminos displays
                </p>
              </div>
            </div>
            {/*<div className="timeline-item delay-400">
            <div className="timeline-year">2014</div>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="text-lg font-semibold">Cadmium-Free Innovation</h3>
              <p className="text-gray-300">
                Samsung develops world's first cadmium-free quantum dot material
              </p>
            </div>
          </div>*/}
            <div className="timeline-item delay-400">
              <div className="timeline-year">2017</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="text-lg font-semibold">QLED Alliance</h3>
                <p className="text-gray-300">
                  Samsung introduces QLED branding and forms industry alliance
                  with Hisense and TCL
                </p>
              </div>
            </div>
            <div className="timeline-item delay-500">
              <div className="timeline-year">2023</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="text-lg font-semibold">
                  Nobel Prize in Chemistry
                </h3>
                <p className="text-gray-300">
                  Ekimov, Efros, and Brus awarded Nobel Prize for quantum dot
                  discovery
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-16 mb-2">
          <p className="content-subtitle text-sm text-gray-400 text-center">
            From scientific discovery to industry standard: QLED's journey spans
            four decades
          </p>
        </div>
      </div>

      {/* Speaker Notes */}
      <aside className="notes">
        <h3>Speaker Notes for Slide 3:</h3>
        <ul>
          <li>
            QLED's journey spans four decades, from scientific discovery to
            commercial success.
          </li>
          <li>
            In 1981, Alexei Ekimov, along with Alexander Efros and Louis Brus,
            discovered quantum dots while studying colored glass—observing how
            particle size affected light absorption through quantum effects.
          </li>
          <li>
            Samsung began quantum dot research in 2001. Sony launched the first
            quantum dot-enhanced displays in 2013 with Triluminos technology,
            followed by Samsung's QLED branding in 2017, forming an alliance
            with Hisense and TCL.
          </li>
          <li>
            In 2023, Ekimov, Brus, and Efros were awarded the Nobel Prize in
            Chemistry, recognizing quantum dots' transformative impact—from
            medieval stained glass principles to modern display technology.
          </li>
        </ul>
      </aside>
    </section>
  );
}
