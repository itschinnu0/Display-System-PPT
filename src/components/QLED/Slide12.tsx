import "../../styles/QLED/slide12.css";

export function QLEDSlide12() {
  return (
    <section data-slide="12" aria-labelledby="qled12-title">
      <div className="slide-container">
        {/* Decorative background layers */}
        <div className="decor-grid" aria-hidden="true"></div>
        <div className="accent-orb orb-1" aria-hidden="true"></div>
        <div className="accent-orb orb-2" aria-hidden="true"></div>

        {/* Title */}
        <header className="px-16 pt-12">
          <h1
            id="qled12-title"
            className="section-title text-4xl md:text-5xl mb-3 gradient-text"
          >
            Conclusion
          </h1>
          <p className="section-subtitle text-gray-300 max-w-3xl mt-10 mb-10 text-xl">
            Display tech trade‑offs at a glance to choose the right panel for
            context and constraints.
          </p>
        </header>

        {/* Cards */}
        <main className="px-16 pb-12">
          <div className="grid gap-6 md:grid-cols-3">
            {/* LCD */}
            <article className="tech-card" aria-labelledby="lcd-title">
              <div className="card-head">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="12" rx="2"></rect>
                  <rect x="8" y="19" width="8" height="2" rx="1"></rect>
                </svg>
                <h3 id="lcd-title" className="card-title">
                  LCD
                </h3>
              </div>
              <ul className="card-list">
                <li>
                  <span className="pill">Strengths</span> Efficient, scalable,
                  and cost‑effective across many sizes.
                </li>
                <li>
                  <span className="pill pill-warn">Trade‑offs</span> Needs
                  backlight; contrast, viewing angles, and response trail
                  self‑emissive tech.
                </li>
                <li>
                  <span className="pill pill-ok">Roadmap</span> Faster LC modes,
                  high‑Hz driving, and finer mini‑LED local dimming.
                </li>
              </ul>
            </article>

            {/* OLED */}
            <article className="tech-card" aria-labelledby="oled-title">
              <div className="card-head">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="6"></circle>
                </svg>
                <h3 id="oled-title" className="card-title">
                  OLED
                </h3>
              </div>
              <ul className="card-list">
                <li>
                  <span className="pill">Strengths</span> Self‑emissive: true
                  blacks, near‑infinite contrast, fast response, wide angles.
                </li>
                <li>
                  <span className="pill pill-warn">Trade‑offs</span> Burn‑in
                  risk, blue aging, moisture sensitivity, and higher
                  cost/yields.
                </li>
                <li>
                  <span className="pill pill-ok">Roadmap</span> Tandem stacks,
                  phosphorescent blue, and inkjet printing for
                  brightness/lifetime/scale.
                </li>
              </ul>
            </article>

            {/* QLED */}
            <article className="tech-card" aria-labelledby="qled-title">
              <div className="card-head">
                <svg
                  className="card-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 3l2.6 5.3L20 9.1l-4 3.9.9 5.6L12 16.8l-4.9 1.8.9-5.6-4-3.9 5.4-.8L12 3z"></path>
                </svg>
                <h3 id="qled-title" className="card-title">
                  QLED
                </h3>
              </div>
              <ul className="card-list">
                <li>
                  <span className="pill">Strengths</span> Very high brightness
                  and color volume, durable and burn‑in resistant.
                </li>
                <li>
                  <span className="pill pill-warn">Trade‑offs</span>{" "}
                  Blacks/blooming hinge on local dimming; LCD optics bound
                  viewing angles/response.
                </li>
                <li>
                  <span className="pill pill-ok">Roadmap</span> Finer mini‑LED
                  zones, self‑emissive QD‑LED, and MicroLED‑style hybrids.
                </li>
              </ul>
            </article>
          </div>
        </main>
      </div>
    </section>
  );
}
