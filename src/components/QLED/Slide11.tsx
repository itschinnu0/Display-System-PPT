import "../../styles/QLED/slide11.css";

export function QLEDSlide11() {
  return (
    <section data-slide="11">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>
        <div className="px-16 pt-10">
          <h1 className="content-title text-4xl mb-2">
            Greener Screens:{" "}
            <span className="qled-accent">Environmental Impact</span>
          </h1>
          <p className="content-subtitle text-lg text-gray-300 mb-6">
            How QLED technology delivers sustainable display solutions with
            reduced environmental footprint
          </p>
        </div>
        <div className="flex-grow px-16 py-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="eco-card delay-100 flex items-start">
                <div className="eco-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Cadmium-Free Innovation
                  </h3>
                  <p className="text-gray-300">
                    Samsung's indium phosphide (InP) quantum dots eliminate
                    toxic heavy metals while maintaining performance
                  </p>
                </div>
              </div>
              <div className="eco-card delay-200 flex items-start">
                <div className="eco-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Energy Efficiency</h3>
                  <div className="eco-stat">40%</div>
                  <p className="text-gray-300">
                    Better energy efficiency than conventional LCD displays,
                    with significant power savings in typical viewing conditions
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="eco-card delay-300 flex items-start">
                <div className="eco-icon">
                  <i className="fas fa-recycle"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Reduced Waste</h3>
                  <p className="text-gray-300">
                    Longer operational lifespan means fewer replacements,
                    reducing electronic waste in landfills
                  </p>
                </div>
              </div>
              <div className="eco-card delay-400 flex items-start">
                <div className="eco-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Regulatory Compliance
                  </h3>
                  <p className="text-gray-300">
                    Meets international environmental standards including RoHS
                    directive with eco-friendly materials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-16 py-6 mb-4">
          <p className="content-subtitle text-center">
            <span className="qled-accent font-semibold">
              "The sustainable choice"
            </span>
            - QLED combines exceptional performance with environmental
            responsibility
          </p>
        </div>
      </div>
      
      {/* Speaker Notes */}
      <aside className="notes">
        <h3>Speaker Notes for Slide 11:</h3>
        <ul>
          <li>QLED delivers exceptional sustainability alongside performance.</li>
          <li>
            Samsung's cadmium-free indium phosphide quantum dots eliminated toxic heavy metals in 2014, enabling RoHS compliance and global eco-standards. This innovation made commercial QLED environmentally safe without compromising optical performance.
          </li>
          <li>
            Energy efficiency is significant—QLED uses 40% less power than conventional LCDs by converting blue light precisely with minimal waste. Samsung's target is 30% power reduction by 2030 versus 2019 models. The 75-inch Q60C consumes just 108 watts on average.
          </li>
          <li>
            Longer lifespan means fewer replacements—quantum dots don't degrade like organic materials—reducing e-waste dramatically. Samsung achieved Product Carbon Reduction certifications for 80+ models in 2025, using recycled plastics and solar-powered remotes that eliminate 99 million batteries over seven years.
          </li>
        </ul>
      </aside>
    </section>
  );
}
