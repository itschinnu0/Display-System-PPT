import "../../styles/QLED/slide9.css";

export function QLEDSlide9() {
  return (
    <section data-slide="9">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>
        <div className="px-16 pt-10">
          <h1 className="content-title text-4xl mb-2">
            QLED in Action:
            <span className="qled-accent"> Applications</span>
          </h1>
          <p className="content-subtitle text-lg text-gray-300 mb-6">
            How quantum dot technology is transforming displays across multiple
            industries
          </p>
        </div>
        <div className="flex-grow px-16 py-4">
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-4 item-center justify-center">
              <h3 className="font-semibold text-xl mb-2">
                Major Market Segments
              </h3>
              <div className="market-card p-4 flex items-center justify-center delay-100">
                <div className="mr-4">
                  <i className="fas fa-tv market-icon"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Premium Televisions</h4>
                  <p className="text-xl text-gray-300">
                    Market leaders Samsung, TCL, and Hisense dominate the
                    premium QLED TV segment
                  </p>
                </div>
              </div>
              <div className="market-card p-4 flex items-center justify-center delay-200">
                <div className="mr-4">
                  <i className="fas fa-desktop market-icon"></i>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Gaming &amp; Computer Monitors
                  </h4>
                  <p className="text-xl text-gray-300">
                    Superior brightness and color accuracy driving adoption in
                    high-performance displays
                  </p>
                </div>
              </div>
              <div className="market-card p-4 flex items-center justify-center delay-300">
                <div className="mr-4">
                  <i className="fas fa-tablet-alt market-icon"></i>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Mobile &amp; Emerging Applications
                  </h4>
                  <p className="text-xl text-gray-300">
                    Growing adoption in tablets, smartphones, and digital
                    signage markets
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="font-semibold text-center mb-3">
              Key QLED Manufacturers
            </h3>
            <div className="flex justify-center space-x-12 items-center">
              <div className="text-center">
                <div className="text-xl font-bold qled-accent">Samsung</div>
                <p className="text-xs text-gray-400">QLED Pioneer</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold qled-accent">TCL</div>
                <p className="text-xs text-gray-400">QLED Alliance Member</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold qled-accent">Hisense</div>
                <p className="text-xs text-gray-400">QLED Alliance Member</p>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold qled-accent">Sony</div>
                <p className="text-xs text-gray-400">Triluminos Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Speaker Notes */}
      <aside className="notes">
        <h3>Speaker Notes for Slide 9:</h3>
        <ul>
          <li>
            QLED technology is transforming displays across multiple industries,
            creating a $25.47 billion global market in 2025.
          </li>
          <li>
            Premium televisions dominate with 45.5% market share—led by Samsung,
            TCL, and Hisense in the QLED Alliance, plus Sony with Triluminos
            technology. Gaming monitors and computer displays are rapidly
            adopting QLED for superior brightness and color accuracy demanded by
            competitive gaming and creative professionals.
          </li>
          <li>
            Emerging applications are explosive: smartphones show 17.2% CAGR as
            the fastest-growing segment, while automotive displays for
            dashboards and infotainment systems are expanding at 16.4% annually.
            Digital signage, medical imaging, and tablets round out the
            ecosystem.
          </li>
          <li>
            The market's projected to reach $54-59 billion by 2033-2034, driven
            by 4K/8K content, HDR standards, and connected vehicle adoption.
          </li>
        </ul>
      </aside>
    </section>
  );
}
