import "../../styles/OLED/slide2.css";

export function OLEDSlide2() {
  return (
    <section data-slide="2">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        <div className="px-16 pt-12">
          <h1 className="section-title text-4xl mb-2">
            Executive Summary:{" "}
            <span className="qled-accent">The OLED Edge</span>
          </h1>
          <p className="section-subtitle text-lg text-gray-300 mb-8"></p>
        </div>

        <div className="flex-grow px-16 py-4">
          <div className="grid grid-cols-1 gap-6">
            <div className="advantage-card p-5 rounded-lg delay-100">
              <div className="flex items-start mb-2">
                {/* <i className="advantage-icon fas fa-lightbulb-o text-2xl mr-3 mt-1"></i> */}
                <h3 className="text-xl font-semibold">What is OLED?</h3>
              </div>
              <p className="text-gray-300">
                OLED stands for Organic Light-Emitting Diode. It's a
                revolutionary display technology that uses organic compounds to
                emit light when electric current passes through, creating
                stunning visual experiences with superior image quality.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-200">
              <div className="flex items-start mb-2">
                <i className="advantage-icon fas fa-tablet text-2xl mr-3 mt-1"></i>
                <h3 className="text-xl font-semibold">Modern Applications</h3>
              </div>
              <p className="text-gray-300">
                Widely used in smartphones, TVs, monitors, and wearable devices
                for their exceptional color accuracy and contrast ratios.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-300">
              <div className="flex items-start mb-2">
                <i className="advantage-icon fas fa-lightbulb-o text-2xl mr-3 mt-1"></i>
                <h3 className="text-xl font-semibold">Key Innovation</h3>
              </div>
              <p className="text-gray-300">
                Each pixel generates its own light, enabling true blacks,
                infinite contrast, and energy effciency unmatched by traditional
                displays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
