import "../../styles/OLED/slide3.css";

export function OLEDSlide3() {
  return (
    <section data-slide="3">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>
        <div className="px-16 pt-10">
          <h1 className="content-title text-4xl mb-2">
            Pioneers &amp; Progress:
            <span className="qled-accent">Historical Milestones</span>
          </h1>
          <p className="content-subtitle text-lg text-gray-300 mb-6">
            The evolution of OLED technology
          </p>
        </div>
        <div className="flex-grow px-16 py-2">
          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="timeline-item delay-100">
              <div className="timeline-year">1980s</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="text-lg font-semibold">
                  Discovery
                </h3>
                <p className="text-gray-300">
                  OLED technology developed in the late 1980s by researchers working with organic compounds that emit light when electrically stimulated.
                </p>
              </div>
            </div>
            <div className="timeline-item delay-200">
              <div className="timeline-year">2000s</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="text-lg font-semibold">
                  Mobile Adoption
                </h3>
                <p className="text-gray-300">
                  Commercial adoption began with mobile devices, bringing OLED displays to smartphones and portable electronics.
                </p>
              </div>
            </div>
            <div className="timeline-item delay-300">
              <div className="timeline-year">2010s</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="text-lg font-semibold">TV Revolution</h3>
                <p className="text-gray-300">
                  Large-scale OLED TVs entered the market, revolutionizing home entertainment with superior picture quality and design.
                </p>
              </div>
            </div>
            <div className="timeline-item delay-400">
              <div className="timeline-year">2020s</div>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="text-lg font-semibold">Present - Innovation</h3>
                <p className="text-gray-300">
                  Continuous advancement in flexible, foldable, and transparent OLED displays for next-generation devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
