// src/components/Slide3.jsx
import styles from "../../styles/QLED/slide3.module.css";

const Slide3 = () => {
  return (
    <section data-slide="3" className={styles.slideContainer}>
      <h2 className={styles.title}>Key Benefits</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Brightness</h3>
          <p className={styles.cardValue}>Up to 2000 nits peak brightness</p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Color Volume</h3>
          <p className={styles.cardValue}>100% color volume in DCI-P3</p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Lifespan</h3>
          <p className={styles.cardValue}>100,000+ hours of use</p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Efficiency</h3>
          <p className={styles.cardValue}>30% more energy efficient</p>
        </div>
      </div>

      {/* Speaker Notes with timing */}
      <aside className="notes" data-timing="180">
        <h3>Speaker Notes for Slide 3:</h3>
        <ul>
          <li>Walk through each benefit card</li>
          <li>Provide real-world examples for each metric</li>
          <li>Pause for questions after this slide</li>
          <li>Time: 3 minutes</li>
        </ul>
      </aside>
    </section>
  );
};

export { Slide3 };
