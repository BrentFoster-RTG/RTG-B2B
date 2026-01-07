import styles from "./DMCCard.module.scss";

export default function DMCCard() {
  return (
    <div className={styles.card}>
      <h3>DMC Agencies</h3>
      <p>
        We partner with travel agents and event planners worldwide to
        ensure your customers can have a highest quality experience
        while visiting Hamburg.
      </p>

      <button>Get a Quote ↗</button>
    </div>
  );
}
