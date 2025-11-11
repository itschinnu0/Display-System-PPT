import "../../styles/LCD/slide6.css";

export function LCDSlide6() {
  return (
    <section data-slide="6">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>
        <div className="px-16 pt-7">
          <h1 className="content-title text-4xl mb-2">
            How Do Liquid Crystals{" "}
            <span className="qled-accent">Actually Work?</span>
          </h1>
        </div>

        <div className="flex-grow px-16 py-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1">
              <div className="advantage-card delay-100">
                <div className="advantage-metric">Natural State</div>
                <div className="molecules-container twisted">
                  <div className="molecule"></div>
                  <div className="molecule"></div>
                  <div className="molecule"></div>
                  <div className="molecule"></div>
                  <div className="molecule"></div>
                </div>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                  In their natural state, these molecules twist light as it
                  passes through, making the screen appear bright.
                </h3>
              </div>
            </div>

            <div className="col-span-1">
              <div className="grid grid-rows-1 gap-6">
                <div className="advantage-card delay-200">
                  <div className="advantage-metric">Voltage Applied</div>
                  <div className="molecules-container aligned">
                    <div className="molecule"></div>
                    <div className="molecule"></div>
                    <div className="molecule"></div>
                    <div className="molecule"></div>
                    <div className="molecule"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-6 mt-6">
                    When voltage is applied, they align perfectly — blocking or
                    changing the light's direction.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="advantage-card p-5 rounded-lg mt-6 delay-500 h-auto">
            <div className="flex items-start mb-2">
              <h3 className="text-2xl mr-3 mt-1">💡</h3>
              <h3 className="text-xl font-semibold text-center">
                So, the next time you see a brilliant shimmer of color in
                nature, remember — that's a liquid crystal effect in action!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
