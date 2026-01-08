import styles from "./TravelAgentHero.module.scss";
import img from "../../assets/hero-main.png";

const TravelAgentHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2>
          Connect your clients with one of Hamburg’s
          highest rated tour companies
        </h2>

        <div className={styles.card}>
          <p>Get a quick quote</p>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <button>Submit</button>
        </div>
      </div>

      <div className={styles.imageWrap}>
        <img src={img} alt="" />
      </div>
    </section>
  );
};

export default TravelAgentHero;
