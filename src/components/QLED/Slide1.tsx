import "../../styles/QLED/slide1.css";

export function QLEDSlide1() {
  return (
    <section data-slide="1">
      <div className="slide-container">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header section with title */}
        <div className="flex flex-col items-center justify-center px-6 text-center">
          <h1 className="title-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            <span className="qled-accent">QLED</span> Display Technology
          </h1>

          <p className="subtitle-text text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
            A professional exploration of quantum dot technology, performance
            advantages, and innovation trajectory
          </p>
        </div>

        {/* Visual section with image */}
        <div className="flex justify-center">
          <img
            alt="QLED"
            className="quantum-dot-image rounded-lg border border-blue-400"
            src="assets/QLED-HD.webp"
          />
        </div>
      </div>

      {/* Speaker Notes */}
      <aside className="notes">
        <h3>Speaker Notes for Slide 1:</h3>
        <ul>
          <li>Welcome the audience</li>
          <li>
            Moving to QLED—Quantum Dot LED technology. This is Samsung's
            enhancement to traditional LCDs using nanoscale quantum dots that
            emit precise colors when hit by LED backlight.
          </li>
          <li>
            Key advantages: brightness up to 2000 nits—far exceeding OLED—wider
            color gamut covering over 100% DCI-P3, and no burn-in risk. Perfect
            for HDR content and bright rooms.
          </li>
          <li>
            The tradeoff? Still uses backlighting, so blacks aren't as deep as
            OLED. But the innovation continues with QD-OLED combining both
            technologies.
          </li>
        </ul>
      </aside>
    </section>
  );
}
