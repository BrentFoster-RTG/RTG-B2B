import styles from "./ContactItem.module.scss";

const ContactItem = ({ title, text, value }) => {
  return (
    <div className={styles.item}>
      <strong>{title}</strong>
      {text && <span>{text}</span>}
      <p>{value}</p>
    </div>
  );
};

export default ContactItem;
