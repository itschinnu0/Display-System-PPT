import "../../styles/LCD/slide7.css";

export function LCDSlide7() {
  return (
    <section data-slide="7">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        <div className="px-16 pt-12">
          <h1 className="section-title text-4xl mb-2">
            Beyond Screens –{" "}
            <span className="qled-accent">The Future of Liquid Crystals</span>
          </h1>
        </div>

        <div className="flex-grow px-16 py-4 h-full">
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="col-1">
              <div className="advantage-card p-5 rounded-lg delay-300">
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-2xl mr-3">🪟</h3>
                  <h3 className="text-xl font-semibold text-center">Smart Windows</h3>
                </div>
                <p className="text-gray-300">
                  Glass that automatically adjusts transparency based on
                  sunlight, reducing energy use and providing adaptive shading
                  for buildings.
                </p>
              </div>
            </div>
            <div className="col-2">
              <div className="advantage-card p-5 rounded-lg delay-300">
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-2xl mr-3 mt-1">🧬</h3>
                  <h3 className="text-xl font-semibold text-center">Bio-Sensing Films</h3>
                </div>
                <p className="text-gray-300">
                  Medical films made of liquid crystals that can detect diseases
                  by changing color when exposed to certain chemicals in the
                  body.
                </p>
              </div>
            </div>
            <div className="col-3">
              <div className="advantage-card p-5 rounded-lg delay-300">
                <div className="flex items-center justify-center mb-2">
                  <h3 className="text-2xl mr-3 mt-1">🤖</h3>
                  <h3 className="text-xl font-semibold text-center">Artificial Muscles</h3>
                </div>
                <p className="text-gray-300">
                  LC-based materials that can move and respond to heat or light
                  — potentially used in robotics or prosthetic devices.
                </p>
              </div>
            </div>
          </div>
          <div className="advantage-card p-5 rounded-lg mt-6 delay-500">
            <div className="flex items-start mb-2">
              <h3 className="text-2xl mr-3 mt-1">💡</h3>
              <h3 className="text-xl font-semibold text-center">
                The future of liquid crystals isn't limited to screens; it's
                about materials that are alive, adaptive, and intelligent —
                shaping how we live and interact with technology.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
