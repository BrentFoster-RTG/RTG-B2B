import styles from "./MainHero.module.scss";

const MainHero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroTextSection}>
          <span className={styles.badge}>Based on 10000+ 5-star reviews</span>

          <h1 className={styles.mainHeading}>
            PARTNER WITH ONE OF HAMBURG'S{" "}
            <span className={styles.highlight}>MOST APPRECIATED</span> TOUR
            COMPANIES
          </h1>

          <p className={styles.subText}>
            We provide custom travel experiences for corporate clients and partner
            with service providers in Hamburg
          </p>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Explore Solutions</button>
            <button className={styles.secondaryBtn}>About Us</button>
          </div>
        </div>

        <div className={styles.heroImageSection} />
      </div>
    </section>
  );
};

export default MainHero;
