import styles from "./TravelAgentHero.module.scss";
import heroImg from "../../assets/travel-agency.png";

const TravelAgentHero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.badge}>Based on 10000+ Reviews</span>

        <h1 className={styles.title}>
          CONNECT YOUR CLIENTS WITH ONE OF <br />
          HAMBURG’S <span className={styles.hightlight}>HIGHEST RATED</span> TOUR COMPANIES
        </h1>

        <div className={styles.content}>
          <img src={heroImg} alt="" className={styles.image} />

          <form className={styles.form}>
            <h3>Get a Quick Quote</h3>
            <p>
              Travel Agent? Connect with us to get a quick Hamburg solution for
              your customers worldwide
            </p>

            <label>
              Company name
              <input placeholder="Your Company" />
            </label>

            <label>
              Email
              <input placeholder="Your Email" />
            </label>

            <label>
              How can we help?
              <input placeholder="Your Request" />
            </label>

            <button type="submit">Send Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TravelAgentHero;
