import styles from './ServiceCard.module.scss';
import image from '../../assets/corporate.png';

const ServiceCard = () => {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h3>Corporate Events</h3>

        <button className={styles.btn}>
          Explore ↗
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
