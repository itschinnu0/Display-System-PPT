import "../../styles/LCD/slide5.css";

export function LCDSlide5() {
  return (
    <section data-slide="5">
      <div className="slide-container">
        <h1 className="slide-title">Liquid Crystals All Around Us!</h1>

        <div className="content-section">
          <p>
            Liquid crystals are fascinating substances that behave like both
            solids and liquids at the same time. Their molecules flow freely
            like a liquid but maintain a certain order like a solid crystal.
          </p>
          <p>
            They're not just inside our screens — they're everywhere around us!
            Thermochromic mood rings, digital thermometers, and even simple
            calculators use liquid crystals to display information.
          </p>
        </div>

        <div className="content-section">
          <div className="examples-grid">
            <div className="example-card">
              <div className="example-icon">💍</div>
              <div className="example-title">Mood Rings</div>
              <div className="example-desc">Color-changing jewelry</div>
            </div>
            <div className="example-card">
              <div className="example-icon">🌡️</div>
              <div className="example-title">Thermometers</div>
              <div className="example-desc">Digital temperature displays</div>
            </div>
            <div className="example-card">
              <div className="example-icon">🔢</div>
              <div className="example-title">Calculators</div>
              <div className="example-desc">Simple LCD screens</div>
            </div>
            <div className="example-card">
              <div className="example-icon">⌚</div>
              <div className="example-title">Digital Watches</div>
              <div className="example-desc">Time displays</div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <p>
            What's even more amazing is that nature uses the same principle —
            the bright colors of butterfly wings, beetle shells, and peacock
            feathers come from crystal-like molecular arrangements.
          </p>

          <div className="highlight-box">
            <p>
              💡 So, the next time you see a brilliant shimmer of color in
              nature, remember — that's a liquid crystal effect in action!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
