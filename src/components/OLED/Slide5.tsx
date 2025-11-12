import "../../styles/OLED/slide5.css";

export function OLEDSlide5() {
  return (
    <section data-slide="5">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>
        <div className="px-16 pt-10">
          <h1 className="content-title text-4xl mb-2">
            OLED Image
            <span className="qled-accent"> Quality and Performance</span>
          </h1>
        </div>
        <div className="flex-grow px-16 py-4 mb-8">
          <div className="flex flex-col">
            <div className="pr-6">
              <h2 className="text-xl font-semibold mb-4 qled-accent">
                Superior Image Quality
              </h2>
              <div className="feature-card delay-100">
                <h3 className="text-lg font-medium">
                  OLED displays produce exceptional image quality with infinite
                  contrast ratios, true black levels, and vibrant colors. Each
                  pixel generates its own light, eliminating the need for
                  backlighting and enabling precise control over brightness and
                  color reproduction. This results in stunning visual
                  experiences with unmatched depth and realism.
                </h3>
              </div>
              <h2 className="text-xl font-semibold mb-4 qled-accent">
                Lightning-Fast Response
              </h2>
              <div className="feature-card delay-200">
                <h3 className="text-lg font-medium">
                  OLED technology offers incredibly fast response times, making
                  it ideal for gaming and fast-paced video content. With
                  response times measured in microseconds, OLED displays
                  eliminate motion blur and ghosting, providing crystal-clear
                  images even during rapid scene transitions and high-speed
                  gaming sequences.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
