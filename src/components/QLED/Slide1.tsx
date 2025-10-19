import styles from "../../styles/QLED/slide1.module.css";

const Slide1 = () => {
  return (
    <section data-slide="1" className={styles.slideContainer}>
      <div className={styles.backgroundOverlay}></div>
      <div className={`${styles.techCircle} ${styles.techCircle1}`}></div>
      <div className={`${styles.techCircle} ${styles.techCircle2}`}></div>

      {/* Header section with title */}
      <div className={styles.contentWrapper}>
        <h1 className={styles.titleText}>
          <span className={styles.qledAccent}>QLED</span> Display Technology
        </h1>

        <p className={styles.subtitleText}>
          A professional exploration of quantum dot technology, performance
          advantages, and innovation trajectory
        </p>
      </div>

      {/* Visual section with image */}
      <div className={styles.imageWrapper}>
        <img
          alt="QLED Quantum Dot Display Architecture"
          className={styles.quantumDotImage}
          src="https://www.yankodesign.com/images/design_news/2024/02/top-10-game-changing-materials-that-are-shaping-the-design-and-technology-world-in-2024/game_changing_materials_2024_3.jpg"
        />
      </div>

      {/* Speaker Notes - Press 'S' to view */}
      <aside className="notes">
        <h3>Speaker Notes for Slide 1:</h3>
        <ul>
          <li>Welcome the audience</li>
          <li>Introduce QLED technology overview</li>
          <li>
            Mention we'll cover quantum dots, performance, and innovations
          </li>
          <li>Estimated time: 2 minutes</li>
        </ul>
      </aside>
    </section>
  );
};

export { Slide1 };
