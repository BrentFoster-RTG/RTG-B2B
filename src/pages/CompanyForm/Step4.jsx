import styles from "./Step4.module.scss";

const Step4 = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Form Successfully Submitted!</h2>
      <p className={styles.subtitle}>
        Thank you for your request. We will contact you within 24 hours.
      </p>
      <button
        className={styles.homeBtn}
        onClick={() => (window.location.href = "/")}
      >
        Homepage
      </button>
    </div>
  );
};

export default Step4;
