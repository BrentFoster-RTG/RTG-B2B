import styles from "./CaseHero.module.scss";
import caseImg from "../../assets/case.png";

const CaseHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.header}>
        <h2>Case Study Heading</h2>
        <p>See how our partners grow with us</p>
      </div>

      <img src={caseImg} alt="Case Study" />
    </section>
  );
};

export default CaseHero;
