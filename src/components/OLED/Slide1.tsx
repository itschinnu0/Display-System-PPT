import '../../styles/OLED/slide1.css';

export function OLEDSlide1() {
  return (
    <section data-slide="1">
      <div className="slide-container">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header section with title */}
        <div className="flex flex-col items-center justify-center px-6 text-center">
          <h1 className="title-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            <span className="qled-accent">OLED</span> Display Technology
          </h1>

          <p className="subtitle-text text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
            A professional exploration of organic LED technology, performance
            advantages, and innovation trajectory
          </p>
        </div>

        {/* Visual section with image */}
        <div className="flex justify-center">
          <img
            alt="QLED Quantum Dot Display Architecture"
            className="quantum-dot-image rounded-lg border border-blue-400"
            src="https://blog.ansi.org/wp-content/uploads/2016/12/LED2Bclose2Bup.jpg"
          />
        </div>
      </div>

      {/* Speaker Notes */}
      <aside className="notes">
        <h3>Speaker Notes for Slide 1:</h3>
        <ul>
          <li>Welcome the audience</li>
          <li>Introduce QLED technology overview</li>
          <li>Mention quantum dots, performance, and innovations</li>
          <li>Estimated time: 2 minutes</li>
        </ul>
      </aside>
    </section>
  );
}
