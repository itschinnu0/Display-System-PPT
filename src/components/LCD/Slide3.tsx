import "../../styles/LCD/slide3.css";

export function LCDSlide3() {
  return (
    <section data-slide="3">
      <div className="slide-container">
        <h1 className="slide-title">Classification of Liquid Crystals</h1>

        <div className="phases-container">
          <div className="phase-card">
            <h2 className="phase-header">Nematic Phase</h2>
            <div className="phase-visual">
              <div className="nematic-lines">
                <div className="nematic-line"></div>
                <div className="nematic-line"></div>
                <div className="nematic-line"></div>
                <div className="nematic-line"></div>
                <div className="nematic-line"></div>
              </div>
            </div>
            <ul className="phase-description">
              <li>Molecules are aligned parallel but not arranged in layers</li>
              <li>Most commonly used in LCD displays</li>
            </ul>
          </div>

          <div className="phase-card">
            <h2 className="phase-header">Smectic Phase</h2>
            <div className="phase-visual">
              <div className="smectic-layers">
                <div className="smectic-layer"></div>
                <div className="smectic-layer"></div>
                <div className="smectic-layer"></div>
              </div>
            </div>
            <ul className="phase-description">
              <li>Molecules are aligned and arranged in distinct layers</li>
              <li>More ordered structure than nematic phase</li>
            </ul>
          </div>

          <div className="phase-card">
            <h2 className="phase-header">Cholesteric Phase</h2>
            <div className="phase-visual">
              <div className="cholesteric-waves">
                <div className="cholesteric-wave">
                  <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M 0 10 Q 25 4 50 10 T 100 10 T 150 10 T 200 10" />
                  </svg>
                </div>
                <div className="cholesteric-wave">
                  <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M 0 10 Q 25 4 50 10 T 100 10 T 150 10 T 200 10" />
                  </svg>
                </div>
                <div className="cholesteric-wave">
                  <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M 0 10 Q 25 4 50 10 T 100 10 T 150 10 T 200 10" />
                  </svg>
                </div>
                <div className="cholesteric-wave">
                  <svg viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M 0 10 Q 25 4 50 10 T 100 10 T 150 10 T 200 10" />
                  </svg>
                </div>
              </div>
            </div>
            <ul className="phase-description">
              <li>Molecules arranged in helical structures</li>
              <li>
                Can selectively reflect light (used in displays, thermometers)
              </li>
            </ul>
          </div>
        </div>

        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Phase Type</th>
                <th>Molecular Arrangement</th>
                <th>Order Level</th>
                <th>Primary Applications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Nematic</strong>
                </td>
                <td>Parallel orientation, no layers</td>
                <td>Lowest</td>
                <td>Standard LCD displays</td>
              </tr>
              <tr>
                <td>
                  <strong>Smectic</strong>
                </td>
                <td>Parallel orientation in layers</td>
                <td>Medium</td>
                <td>High-precision displays</td>
              </tr>
              <tr>
                <td>
                  <strong>Cholesteric</strong>
                </td>
                <td>Helical structure</td>
                <td>Highest</td>
                <td>Color-changing displays, thermometers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
