import styles from "../../styles/QLED/slide2.module.css";

const Slide2 = () => {
  return (
    <section data-slide="2" className={styles.slideContainer}>
      <h2 className={styles.title}>What is QLED?</h2>

      <div className={styles.contentBox}>
        <p className={styles.description}>
          Quantum dot LED (QLED) technology uses semiconductor nanocrystals that
          produce pure, highly saturated colors when illuminated by a backlight.
        </p>

        <ul className={styles.featureList}>
          <li className={styles.feature}>
            Enhanced color accuracy and brightness
          </li>
          <li className={styles.feature}>Improved energy efficiency</li>
          <li className={styles.feature}>
            Longer lifespan compared to traditional displays
          </li>
        </ul>
      </div>

      {/* Speaker Notes */}
      <aside className="notes">
        <h3>Speaker Notes for Slide 2:</h3>
        <ul>
          <li>Explain quantum dot basics</li>
          <li>Emphasize the nano-scale technology</li>
          <li>Compare with traditional LED backlights</li>
          <li>Time: 3 minutes</li>
        </ul>
      </aside>
    </section>
  );
};

export { Slide2 };
