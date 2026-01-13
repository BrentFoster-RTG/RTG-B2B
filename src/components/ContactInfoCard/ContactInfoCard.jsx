import styles from "./ContactInfoCard.module.scss";
import ContactItem from "../ContactItem/ContactItem";
import Button from "../Button/Button";

const ContactInfoCard = () => {
  return (
    <div className={styles.card}>
      <h3>General Contacts</h3>
      <p className={styles.subtitle}>
        We’d love to hear from you. Our friendly team is always here to chat.
      </p>

      <div className={styles.items}>
        <ContactItem title="Work hours" text="Monday - Friday" value="09:00 - 18:00" />
        <ContactItem title="Phone" value="+1 (555) 000-0000" />
        <ContactItem title="Email" value="corporate@robin.de" />
      </div>

      <Button variant="outline">All Contacts ↗</Button>
    </div>
  );
};

export default ContactInfoCard;
