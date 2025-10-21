import "../../styles/QLED/slide12.css";

export function QLEDSlide12() {
  return (
    <section data-slide="12">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>
        <div className="px-16 pt-12">
          <h1 className="section-title text-4xl mb-2">
            Conclusion &amp; <span className="qled-accent">Market Outlook</span>
          </h1>
          <p className="section-subtitle text-lg text-gray-300 mb-8">
            From Nobel Prize-winning science to industry-changing display
            technology
          </p>
        </div>
        <div className="px-16 mb-6">
          <div className="market-projection rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-1">
                QLED Market Growth Projection
              </h3>
              <p className="text-gray-300">
                Compound Annual Growth Rate (CAGR): 9.45%
              </p>
            </div>
            <div className="text-right">
              <div className="projection-number text-4xl">$98.41 Billion</div>
              <p className="text-sm text-gray-400">Market Size by 2034</p>
            </div>
          </div>
        </div>
        <div className="flex-grow px-16 py-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="conclusion-card p-5 rounded-lg delay-100">
              <div className="flex items-start mb-2">
                <i className="conclusion-icon fas fa-medal text-2xl mr-3 mt-1"></i>
                <h3 className="text-xl font-semibold">Scientific Excellence</h3>
              </div>
              <p className="text-gray-300">
                Nobel Prize-winning quantum dot technology transformed from
                laboratory discovery to mainstream display innovation
              </p>
            </div>
            <div className="conclusion-card p-5 rounded-lg delay-200">
              <div className="flex items-start mb-2">
                <i className="conclusion-icon fas fa-tv text-2xl mr-3 mt-1"></i>
                <h3 className="text-xl font-semibold">Market Dominance</h3>
              </div>
              <p className="text-gray-300">
                Samsung's 19 years of consecutive TV market leadership
                strengthened by QLED technology advantages
              </p>
            </div>
            <div className="conclusion-card p-5 rounded-lg delay-300">
              <div className="flex items-start mb-2">
                <i className="conclusion-icon fas fa-leaf text-2xl mr-3 mt-1"></i>
                <h3 className="text-xl font-semibold">
                  Environmental Progress
                </h3>
              </div>
              <p className="text-gray-300">
                Cadmium-free quantum dots demonstrate how innovation can enhance
                performance while reducing environmental impact
              </p>
            </div>
            <div className="conclusion-card p-5 rounded-lg delay-400">
              <div className="flex items-start mb-2">
                <i className="conclusion-icon fas fa-lightbulb text-2xl mr-3 mt-1"></i>
                <h3 className="text-xl font-semibold">Future Innovation</h3>
              </div>
              <p className="text-gray-300">
                Self-emissive QLED and Mini-LED integration point to exciting
                next-generation display technologies
              </p>
            </div>
          </div>
        </div>

        <div className="px-16 py-4 mt-2">
          <p className="section-subtitle text-gray-300 text-center">
            QLED technology will remain at the forefront of display innovation,
            delivering exceptional brightness, color, and durability to
            consumers worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
