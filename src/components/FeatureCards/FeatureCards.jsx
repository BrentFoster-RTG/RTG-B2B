import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BoltIcon from "@mui/icons-material/Bolt";
import styles from "./FeatureCards.module.scss";

const cards = [
  {
    title: "Short-notice organization",
    text: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    title: "One-stop solution provider",
    text: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    title: "Flexible, modular design",
    text: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
];

const FeatureCards = () => {
  return (
    <div className={styles.wrapper}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.top}>
            <div className={styles.icon}>
              <BoltIcon sx={{ color: "#FFC107" }} />
            </div>

            <ArrowOutwardIcon sx={{ color: "#FFC107" }} />
          </div>

          <h3>{card.title}</h3>
          <p>{card.text}</p>

          <span className={styles.link}>
            Learn more <ArrowOutwardIcon fontSize="small" />
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
