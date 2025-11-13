import "../../styles/LCD/slide2.css";

export function LCDSlide2() {
  return (
    <section data-slide="2">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        <div className="px-16 pt-12">
          <h1 className="section-title text-4xl mb-2">
            Executive Summary: <span className="qled-accent">The LCD Edge</span>
          </h1>
          <p className="section-subtitle text-lg text-gray-300 mb-8">
            LCD (Liquid Crystal Display) display technology is a classic and
            versatile solution for high-quality image and text presentation.
          </p>
        </div>

        <div className="flex-grow px-16 py-4">
          <div className="grid grid-cols-1 gap-6">
            <div className="advantage-card p-5 rounded-lg delay-100">
              <div className="flex items-start mb-2">
                {/* <i className="advantage-icon fas fa-lightbulb-o text-2xl mr-3 mt-1"></i> */}
              </div>
              <p className="text-gray-300">
                Liquid crystals are extraordinary materials that possess
                properties conventional liquids and solid crystals.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-200">
              <div className="flex items-start mb-2"></div>
              <p className="text-gray-300">
                Their molecules can flow like a liquid but simultaneously
                maintain some ordered structure similar to crystals.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-300">
              <div className="flex items-start mb-2"></div>
              <p className="text-gray-300">
                What makes liquid crystals particularly valuable in modern
                technology is their high sensitivity to temperature changes,
                electric field!, and magnetic fields.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-400">
              <div className="flex items-start mb-2"></div>
              <p className="text-gray-300">
                This unique combination of properties makes them ideal
                candidates for various applications, particularly in display
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
