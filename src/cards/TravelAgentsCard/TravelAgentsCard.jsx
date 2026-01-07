import styles from "./TravelAgentsCard.module.scss";

export default function TravelAgentsCard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h3>Travel Agents</h3>
        <p>
          We partner with travel agents and event planners worldwide to
          ensure your customers can have a highest quality experience
          while visiting Hamburg.
        </p>

        <button>
          Learn More ↗
        </button>
      </div>
    </div>
  );
}
