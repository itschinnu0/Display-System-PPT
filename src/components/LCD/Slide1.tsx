import "../../styles/LCD/slide1.css";

export function LCDSlide1() {
  return (
    <section data-slide="1">
      <div className="slide-container">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header section with title */}
        <div className="flex flex-col items-center justify-center px-6 text-center">
          <h1 className="title-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            <span className="qled-accent">LCD</span> Display Technology
          </h1>

          <p className="subtitle-text text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mb-10">
            A professional exploration of Liquid Crystal Display technology,
            performance advantages, and innovation trajectory
          </p>
        </div>

        {/* Visual section with image */}
        <div className="flex justify-center">
          <img
            alt="LCD"
            className="quantum-dot-image rounded-lg border border-blue-400"
            src=""
          />
        </div>
      </div>
    </section>
  );
}
