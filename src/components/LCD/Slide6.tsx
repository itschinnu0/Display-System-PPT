import "../../styles/LCD/slide6.css";

export function LCDSlide6() {
  return (
    <section data-slide="6">
      <div className="slide-container">
        <h1 className="slide-title">How Do Liquid Crystals Actually Work?</h1>

        <div className="content-grid">
            <div className="content-box">
                <h2 className="box-header">Natural State</h2>
                <div className="visual-demo">
                    <span className="state-label">NO VOLTAGE</span>
                    <div className="molecules-container twisted">
                        <div className="molecule"></div>
                        <div className="molecule"></div>
                        <div className="molecule"></div>
                        <div className="molecule"></div>
                        <div className="molecule"></div>
                    </div>
                </div>
                <p>In their natural state, these molecules twist light as it passes through, making the screen appear bright.</p>
            </div>

            <div className="content-box">
                <h2 className="box-header">Voltage Applied</h2>
                <div className="visual-demo">
                    <span className="state-label">VOLTAGE ON</span>
                    <div className="molecules-container aligned">
                        <div className="molecule"></div>
                        <div className="molecule"></div>
                        <div className="molecule"></div>
                        <div className="molecule"></div>
                        <div className="molecule"></div>
                    </div>
                </div>
                <p>When voltage is applied, they align perfectly — blocking or changing the light's direction.</p>
            </div>
        </div>

        <div className="full-width-section">
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#b8d9f0", marginBottom: "20px" }}>The magic behind every LCD screen lies in how liquid crystal molecules respond to electric fields. This switching happens thousands of times per second, creating the pixels, images, and motion we see.</p>
            
            <div className="highlight-text">
                <strong>What's truly impressive</strong> is how this blends optics, physics, and electronics — showing how a microscopic dance of molecules becomes the display of your phone, TV, or even smartwatch!
            </div>
        </div>
    </div>
    </section>);    
}