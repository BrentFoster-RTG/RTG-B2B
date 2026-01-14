import styles from "./ContactInfoCard.module.scss";
import LightModeIcon from '@mui/icons-material/LightMode';

const ContactInfoCard = () => {
  return (
    <div className={styles.card}>
      <h3>General Contacts</h3>
      <p className={styles.subtitle}>
        We’d love to hear from you. Our friendly team is always here to chat.
      </p>

      <div className={styles.items}>
        <LightModeIcon sx={{color:'#FFBA18'}} />
      </div>

      <button>All Contacts ↗</button>
    </div>
  );
};

export default ContactInfoCard;
