import styles from "./CaseHero.module.scss";
import caseImg from "../../assets/case.jpg";

const CaseHero = () => {
  return (
    <section className={styles.section}>
      <div>
            <span className={styles.badge}>Partnership Cases</span>
      </div>

      <h2 className={styles.title}>Case Study Heading</h2>
      <p className={styles.subtitle}>Intriguing study subheading</p>

      <div className={styles.card}>
        <img src={caseImg} alt="" />
      </div>
    </section>
  );
};

export default CaseHero;
