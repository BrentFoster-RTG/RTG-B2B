import styles from "./SuccessMessage.module.scss";

const SuccessMessage = ({ onClose }) => {
  return (
    <div className={styles.success}>
      <span>✅</span>
      <div>
        <strong>Success</strong>
        <p>We reply to requests within 24 hours.</p>
      </div>
      <button onClick={onClose}>✕</button>
    </div>
  );
};

export default SuccessMessage;
