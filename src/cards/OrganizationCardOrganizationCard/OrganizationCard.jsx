import styles from "./OrganizationCard.module.scss";

export default function OrganizationCard() {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.icon}>⚡</div>
        <span className={styles.arrow}>↗</span>
      </div>

      <h3>Short-notice organization</h3>
      <p>
        An all-in-one customer service platform that helps you balance
        everything your customers need to be happy.
      </p>

      <a href="#" className={styles.link}>
        Learn more →
      </a>
    </div>
  );
}
