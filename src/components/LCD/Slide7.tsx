import "../../styles/LCD/slide7.css";

export function LCDSlide7() {
  return (
    <section data-slide="7">
      <div className="slide-container">
        <h1 className="slide-title">Beyond Screens – The Future of Liquid Crystals</h1>

        <div className="future-cards">
            <div className="future-card">
                <div className="card-icon">🪟</div>
                <h3 className="card-title">Smart Windows</h3>
                <p className="card-description">Glass that automatically adjusts transparency based on sunlight, reducing energy use and providing adaptive shading for buildings.</p>
            </div>

            <div className="future-card">
                <div className="card-icon">🧬</div>
                <h3 className="card-title">Bio-Sensing Films</h3>
                <p className="card-description">Medical films made of liquid crystals that can detect diseases by changing color when exposed to certain chemicals in the body.</p>
            </div>

            <div className="future-card">
                <div className="card-icon">🤖</div>
                <h3 className="card-title">Artificial Muscles</h3>
                <p className="card-description">LC-based materials that can move and respond to heat or light — potentially used in robotics or prosthetic devices.</p>
            </div>
        </div>

        <div className="conclusion-section">
            <p>The future of liquid crystals isn't limited to screens; it's about <strong>materials that are alive, adaptive, and intelligent</strong> — shaping how we live and interact with technology.</p>
        </div>
    </div>
    </section>);
}