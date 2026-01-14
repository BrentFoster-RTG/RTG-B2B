import styles from "./SuccessMessage.module.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

const SuccessMessage = ({ onClose }) => {
  return (
    <div className={styles.success}>
      <CheckCircleIcon className={styles.icon} />

      <div className={styles.content}>
        <strong>Success</strong>
        <p>
          We reply to requests within 24 hours using the selected communication
          method.
        </p>
      </div>

      <button className={styles.close} onClick={onClose}>
        <CloseIcon sx={{ fontSize: 18 }} />
      </button>
    </div>
  );
};

export default SuccessMessage;
