import { useFormData } from "../../context/FormContext";
import styles from "./Step3.module.scss";
import { useState } from "react";

const Step3 = ({ back, submit }) => {
  const { data, updateField } = useFormData();
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!data.name || !data.role || !data.communication ) {
      setError("Please fill in all required fields");
      return;
    }

    if (!data.email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setError("");
    submit();
  };

  return (
    <div className={styles.card}>
      <span className={styles.step}>Step 3/3</span>

      <div className={styles.progress}>
        <div className={styles.progressFill} />
      </div>

      <h2 className={styles.title}>Communication Preferences</h2>
      <p className={styles.subtitle}>
        We will reach out within 24 hours from your request
      </p>

      <div className={styles.field}>
        <label>Name *</label>
        <input
          type="text"
          placeholder="Your name"
          value={data.name || ""}
          onChange={(e) => updateField("name", e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Role *</label>
        <input
          type="text"
          placeholder="HR / Business Owner / Other"
          value={data.role || ""}
          onChange={(e) => updateField("role", e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Email</label>
        <input
          type="email"
          placeholder="your@email.com"
          value={data.email || ""}
          onChange={(e) => updateField("email", e.target.value)}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.actions}>
        <button className={styles.back} onClick={back}>
          Back
        </button>
        <button className={styles.submit} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step3;
