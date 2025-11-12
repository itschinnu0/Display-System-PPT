import "../../styles/QLED/slide10.css";

export function QLEDSlide10() {
  return (
    <section data-slide="10">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>
        <div className="px-16 pt-10">
          <h1 className="content-title text-4xl mb-2">
            Evolution:{" "}
            <span className="qled-accent">What's Next for QLED?</span>
          </h1>
          <p className="content-subtitle text-lg text-gray-300 mb-6">
            The future of display technology through emerging QLED innovations
          </p>
        </div>
        <div className="flex-grow px-16 py-4">
          <div className="grid grid-cols-3 gap-6">
            <div className="tech-card p-6 delay-100">
              <div className="tech-icon">
                <i className="fas fa-lightbulb text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 qled-accent">
                Self-Emissive QLED
              </h3>
              <p className="text-gray-300 mb-4">
                Electroluminescent quantum dots that emit light directly when
                current is applied
              </p>
              <ul className="text-sm text-gray-300">
                <li className="mb-2 flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>No backlight needed</span>
                </li>
                <li className="mb-2 flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>OLED-like perfect blacks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Faster response times</span>
                </li>
              </ul>
            </div>
            <div className="tech-card p-6 delay-200">
              <div className="tech-icon">
                <i className="fas fa-microchip text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 qled-accent">
                Neo QLED
              </h3>
              <p className="text-gray-300 mb-4">
                Integration of quantum dots with mini-LED backlighting
                technology
              </p>
              <ul className="text-sm text-gray-300">
                <li className="mb-2 flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>LEDs 1/40th of conventional size</span>
                </li>
                <li className="mb-2 flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Quantum Matrix Technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Precise backlight control</span>
                </li>
              </ul>
            </div>
            <div className="tech-card p-6 delay-300">
              <div className="tech-icon">
                <i className="fas fa-layer-group text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 qled-accent">
                MicroLED Hybrid
              </h3>
              <p className="text-gray-300 mb-4">
                Future quantum dots integration with modular MicroLED technology
              </p>
              <ul className="text-sm text-gray-300">
                <li className="mb-2 flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Self-emissive without degradation</span>
                </li>
                <li className="mb-2 flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Modular, scalable designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>Revolutionary form factors</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <div className="tech-card p-6 delay-400">
              <h3 className="text-xl font-semibold mb-3 qled-accent">
                Future Display Vision
              </h3>
              <div className="flex">
                <div className="w-1/2 pr-4">
                  <p className="text-gray-300 mb-3">
                    Next-generation displays will combine the best attributes of
                    all technologies:
                  </p>
                  <ul className="text-sm text-gray-300">
                    <li className="mb-2 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>OLED-like perfect blacks</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>QLED brightness advantages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>MicroLED durability</span>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 pl-4 border-l border-cyan-800">
                  <p className="text-gray-300 mb-3">
                    Emerging applications and form factors:
                  </p>
                  <ul className="text-sm text-gray-300">
                    <li className="mb-2 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>Transparent and flexible displays</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>AR/VR micro-displays</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      <span>Modular wall-sized screens</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-16 py-4 mb-2">
          <p className="content-subtitle text-sm text-gray-400 text-center">
            QLED technology continues to evolve, powering the next generation of
            display innovations
          </p>
        </div>
      </div>.
      
      {/* Speaker Notes */}
      <aside className="notes">
        <h3>Speaker Notes for Slide 10:</h3>
        <ul>
          <li>QLED's future lies in three revolutionary directions.</li>
          <li>
            First, self-emissive QLED—electroluminescent quantum dots that
            produce light when electricity is applied directly, eliminating
            backlights entirely. Sharp and Nanosys demonstrated working QDEL
            prototypes that combine OLED's perfect blacks with QLED's
            advantages, using existing LCD manufacturing equipment for easy
            scalability.
          </li>
          <li>
            Second, Neo QLED—already commercial—integrates quantum dots with
            mini-LEDs just 1/40th conventional size. Samsung's Quantum Matrix
            Technology delivers precise backlight control, virtually eliminating
            blooming while achieving OLED-like contrast with superior
            brightness.
          </li>
          <li>
            Third, MicroLED hybrid systems use quantum dots for color conversion
            on modular, self-emissive MicroLED arrays—enabling transparent
            displays, flexible form factors, and AR/VR microdisplays. The goal:
            combine OLED blacks, QLED brightness, and MicroLED durability in
            revolutionary designs.
          </li>
        </ul>
      </aside>
    </section>
  );
}
