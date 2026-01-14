import styles from "./ContactInfoCard.module.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const ContactInfoCard = () => {
  return (
    <div className={styles.card}>
      <h3>General Contacts</h3>
      <p className={styles.subtitle}>
        We’d love to hear from you. Our friendly team is always here to chat.
      </p>

      <div className={styles.items}>
        <div className={styles.item}>
          <AccessTimeIcon sx={{ color: "#FFBA18", fontSize: 20 }} />
          <div>
            <strong>Work hours</strong>
            <span className={styles.text}>Monday - Friday</span>
            <span className={styles.bold}>09:00 - 18:00</span>
          </div>
        </div>

        <div className={styles.item}>
          <PhoneIcon sx={{ color: "#FFBA18", fontSize: 20 }} />
          <div>
            <strong>Phone</strong>
            <span className={styles.text_info}>+1 (555) 000-0000</span>
          </div>
        </div>

        <div className={styles.item}>
          <EmailIcon sx={{ color: "#FFBA18", fontSize: 20 }} />
          <div>
            <strong>Email</strong>
            <span className={styles.text_info}>corporate@robin.de</span>
          </div>
        </div>
      </div>
      <div>
        <button className={styles.button}>
        All Contacts <ArrowOutwardIcon sx={{ fontSize: 16 }} />
      </button>
      </div>
    </div>
  );
};

export default ContactInfoCard;
