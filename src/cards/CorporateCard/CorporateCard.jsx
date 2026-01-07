import styles from "./CorporateCard.module.scss";

export default function CorporateCard() {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h3>Corporate Clients</h3>
        <p>
          We organize a diverse variety of corporate experiences and events
          that align with your business goals. Our flexible custom solution
          building creates opportunity to tailor a travel experience to your
          specific requirements.
        </p>
      </div>

      <div className={styles.actions}>
        <button className={styles.primary}>Corporate Solutions</button>
        <button className={styles.secondary}>Learn More ↗</button>
      </div>
    </div>
  );
}
