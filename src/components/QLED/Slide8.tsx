import "../../styles/QLED/slide8.css";

export function QLEDSlide8() {
  return (
    <section data-slide="8">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>
        <div className="px-16 pt-10">
          <h1 className="content-title text-4xl mb-2">
            Manufacturing: From
            <span className="qled-accent"> Lab to Living Room</span>
          </h1>
          <p className="content-subtitle text-lg text-gray-300 mb-6">
            Samsung's cadmium-free breakthrough and sustainable production
            innovations
          </p>
        </div>
        <div className="flex-grow px-16 py-4">
          <div className="flex flex-col">
            <div className="pr-6">
              <h2 className="text-xl font-semibold mb-4 qled-accent">
                The Cadmium-Free Breakthrough
              </h2>
              <div className="feature-card delay-100">
                <h3 className="text-lg font-medium">2014 Samsung Innovation</h3>
                <p className="text-gray-300">
                  Samsung developed the world's first commercially viable
                  cadmium-free quantum dots, replacing toxic heavy metals with
                  indium phosphide (InP)
                </p>
              </div>
              <div className="feature-card delay-200">
                <h3 className="text-lg font-medium">Environmental Impact</h3>
                <p className="text-gray-300">
                  Eliminated toxic cadmium while maintaining optical
                  performance, enabling widespread commercial adoption and
                  regulatory compliance
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3">
                  Compliance &amp; Certifications
                </h3>
                <div className="flex flex-row items-center justify-center">
                  <span className="eco-badge delay-100">
                    <i className="fas fa-check-circle mr-1"></i> RoHS Directive
                  </span>
                  <span className="eco-badge delay-200">
                    <i className="fas fa-leaf mr-1"></i> Eco-friendly
                  </span>
                  <span className="eco-badge delay-300">
                    <i className="fas fa-globe mr-1"></i> Global Standards
                  </span>
                  <span className="eco-badge delay-400">
                    <i className="fas fa-recycle mr-1"></i> Sustainable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-16 py-4 mb-2">
          <p className="content-subtitle text-sm text-gray-400 text-center">
            Samsung's cadmium-free quantum dots transform display technology
            while protecting our environment
          </p>
        </div>
      </div>
    </section>
  );
}
