import "../../styles/LCD/slide4.css";

export function LCDSlide4() {
  return (
    <section data-slide="4">
        <div className="slide-container">
        <h1 className="slide-title">Properties and Applications of LCDs</h1>

        <div className="main-content">
            <div className="column">
                <h2 className="section-title">Properties</h2>
                <div className="properties-list">
                    <div className="property-item">
                        <div className="property-icon">📱</div>
                        <div className="property-text">
                            <strong>Thin and Lightweight</strong> — Compact design, easy to integrate
                        </div>
                    </div>

                    <div className="property-item">
                        <div className="property-icon">⚡</div>
                        <div className="property-text">
                            <strong>Low Power Consumption</strong> — Efficient compared to CRTs
                        </div>
                    </div>

                    <div className="property-item">
                        <div className="property-icon">💻</div>
                        <div className="property-text">
                            <strong>Flat Panel Technology</strong> — Sleek and modern screens
                        </div>
                    </div>

                    <div className="property-item">
                        <div className="property-icon">🎯</div>
                        <div className="property-text">
                            <strong>Good Resolution</strong> — Clear and sharp images
                        </div>
                    </div>

                    <div className="property-item">
                        <div className="property-icon">🌗</div>
                        <div className="property-text">
                            <strong>Adjustable Brightness & Contrast</strong> — Though limited vs OLEDs
                        </div>
                    </div>

                    <div className="property-item">
                        <div className="property-icon">👁️</div>
                        <div className="property-text">
                            <strong>Viewing Angle Limitation</strong> — Quality may reduce from sides
                        </div>
                    </div>

                    <div className="property-item">
                        <div className="property-icon">⏱️</div>
                        <div className="property-text">
                            <strong>Response Time</strong> — Moderate; slower than OLED/QLED
                        </div>
                    </div>

                    <div className="property-item">
                        <div className="property-icon">💡</div>
                        <div className="property-text">
                            <strong>Backlight Requirement</strong> — Needs external light source
                        </div>
                    </div>
                </div>
            </div>
            <div className="column">
                <h2 className="section-title">Applications</h2>
                <div className="applications-content">
                    <div className="application-list">
                        <div className="application-item">
                            <div className="application-icon">🖥️</div>
                            <div className="application-text">
                                <strong>Display Devices</strong> — TVs, monitors, smartphones
                            </div>
                        </div>

                        <div className="application-item">
                            <div className="application-icon">📊</div>
                            <div className="application-text">
                                <strong>Measuring Instruments</strong> — Digital watches, multimeters
                            </div>
                        </div>

                        <div className="application-item">
                            <div className="application-icon">💊</div>
                            <div className="application-text">
                                <strong>Medical Equipment</strong> — Portable displays, diagnostic devices
                            </div>
                        </div>

                        <div className="application-item">
                            <div className="application-icon">🔋</div>
                            <div className="application-text">
                                <strong>Battery-operated Devices</strong> — Energy efficient solutions
                            </div>
                        </div>
                    </div>

                    <div className="device-grid">
                        <div className="device-card">
                            <div className="device-icon">🖥️</div>
                            <div className="device-label">Monitors</div>
                        </div>

                        <div className="device-card">
                            <div className="device-icon">📱</div>
                            <div className="device-label">Smartphones</div>
                        </div>

                        <div className="device-card">
                            <div className="device-icon">🧮</div>
                            <div className="device-label">Calculators</div>
                        </div>

                        <div className="device-card">
                            <div className="device-icon">⌚</div>
                            <div className="device-label">Digital Watches</div>
                        </div>

                        <div className="device-card">
                            <div className="device-icon">🏥</div>
                            <div className="device-label">Medical Displays</div>
                        </div>

                        <div className="device-card">
                            <div className="device-icon">🚗</div>
                            <div className="device-label">Vehicle Displays</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>);
}