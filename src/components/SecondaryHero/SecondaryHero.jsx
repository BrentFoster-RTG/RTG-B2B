import styles from "./SecondaryHero.module.scss";

const SecondaryHero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <div className={styles.heroTextSection}>

          <h1 className={styles.mainHeading}>
            EXPIRIENCES AND EVENTS{" "} <br />
            <span className={styles.highlight}>FOR BUSINESS</span>
            IN HUMBURG
          </h1>

          <p className={styles.subText}>
            We provide custom travel experiences for corporate clients and partner with service providers in Hamburg
          </p>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Explore Solutions</button>
            <button className={styles.secondaryBtn}>Custom Experiences</button>
          </div>
        </div>

        <div className={styles.heroImageSection} />
      </div>
    </section>
  );
};

export default SecondaryHero;
