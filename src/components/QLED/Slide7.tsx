import type { CSSProperties } from "react";
import "../../styles/QLED/slide7.css";

export function QLEDSlide7() {
  return (
    <section data-slide="7">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        <div className="px-16 pt-7">
          <h1 className="content-title text-4xl mb-2">
            QLED <span className="qled-accent">Technical Superiority</span>
          </h1>
        </div>

        <div className="flex-grow px-16 py-4">
          <div className="grid grid-cols-2 gap-6 h-full">
            <div className="col-span-1">
              <div className="advantage-card delay-100 h-full">
                <div className="advantage-icon">
                  <i className="fas fa-sun"></i>
                </div>
                <div className="advantage-metric">4,000+ nits</div>
                <h3 className="text-xl font-semibold mb-2">
                  Exceptional Brightness
                </h3>
                <p className="text-gray-300 mb-3">
                  Premium QLED displays achieve peak brightness levels double
                  that of OLED competitors
                </p>
                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">QLED</span>
                    <span className="text-sm text-right">4,000+ nits</span>
                  </div>
                  <div className="comparison-bar">
                    <div
                      className="comparison-fill"
                      style={{ "--fill-width": "100%" } as CSSProperties}
                    ></div>
                  </div>

                  <div className="flex justify-between mt-3 mb-1">
                    <span className="text-sm">OLED</span>
                    <span className="text-sm text-right">~2,400 nits</span>
                  </div>
                  <div className="comparison-bar">
                    <div
                      className="comparison-fill"
                      style={{ "--fill-width": "60%" } as CSSProperties}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="grid grid-rows-2 gap-6 h-full">
                <div className="advantage-card delay-200">
                  <div className="advantage-icon">
                    <i className="fas fa-palette"></i>
                  </div>
                  <div className="advantage-metric">100%</div>
                  <h3 className="text-xl font-semibold mb-2">Color Accuracy</h3>
                  <p className="text-gray-300">
                    Full DCI-P3 and Rec. 2020 color gamut coverage with precise
                    monochromatic emission
                  </p>
                  <ul className="text-gray-300 mt-2">
                    <li className="flex items-center">
                      <i className="fas fa-check text-xs mr-2 text-blue-300"></i>
                      Narrow 20-40nm emission bandwidth
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-xs mr-2 text-blue-300"></i>
                      Reduced color crosstalk
                    </li>
                  </ul>
                </div>

                <div className="advantage-card delay-300">
                  <div className="advantage-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="advantage-metric">0%</div>
                  <h3 className="text-xl font-semibold mb-2">Burn-in Risk</h3>
                  <p className="text-gray-300">
                    Inorganic quantum dot materials provide:
                  </p>
                  <ul className="text-gray-300 mt-2">
                    <li className="flex items-center">
                      <i className="fas fa-check text-xs mr-2 text-blue-300"></i>
                      Complete burn-in immunity
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-xs mr-2 text-blue-300"></i>
                      Enhanced moisture resistance
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-xs mr-2 text-blue-300"></i>
                      Consistent picture quality over time
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-16 py-4 mb-2">
          <p className="content-subtitle text-sm text-gray-400 text-center">
            QLED technology combines industry-leading brightness with
            exceptional durability and accurate colors
          </p>
        </div>
      </div>

      {/* Speaker Notes */}
      <aside className="notes">
        <h3>Speaker Notes for Slide 7:</h3>
        <ul>
          <li>QLED dominates in three critical technical areas.</li>
          <li>
            First, brightness: premium QLED displays reach 4,000+ nits—nearly
            double OLED's 2,400 nit peak. This matters for HDR content graded at
            these levels and bright-room viewing where OLEDs struggle.
          </li>
          <li>
            Second, color accuracy: quantum dots emit narrow 20-40 nanometer
            bandwidth light, providing full DCI-P3 and Rec. 2020 coverage with
            minimal color crosstalk. QLED maintains color volume even at maximum
            brightness, unlike OLEDs which compress colors when pushed.
          </li>
          <li>
            Third, durability: inorganic quantum dots offer zero burn-in
            risk—critical for gaming, static UI elements, and news tickers.
            They're also moisture-resistant, delivering consistent picture
            quality throughout the display's extended lifespan.
          </li>
        </ul>
      </aside>
    </section>
  );
}
