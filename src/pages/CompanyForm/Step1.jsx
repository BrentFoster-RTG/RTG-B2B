import { useFormData } from "../../context/FormContext";
import { useState } from "react";
import styles from './Step1.module.scss'

const Step1 = ({ next }) => {
  const { data, updateField } = useFormData();
  const [error, setError] = useState("");

  const handleNext = () => {
    if (
      !data.companyName ||
      !data.country ||
      !data.city
    ) {
      setError("Please fill in all required fields");
      return;
    }

    setError("");
    next();
  };

  return (
    <div className={styles.form_card}>
      <div className={styles.progress}>
        <span>Step 1/3</span>
        <div className={styles.progress_bar}>
          <div className={styles.progress_fill} style={{ width: "33%" }}></div>
        </div>
      </div>

      <h2>Company Introduction</h2>
      <p>Please provide information about your company</p>

      <input
        type="text"
        placeholder="Your Company"
        required
        value={data.companyName}
        onChange={e => updateField("companyName", e.target.value)}
      />

      <select
        required
        value={data.country}
        onChange={e => updateField("country", e.target.value)}
      >
        <option value="">Select Country</option>
        <option value="USA">USA</option>
        <option value="Germany">Germany</option>
      </select>

      <input
        type="text"
        placeholder="City / Region"
        value={data.city}
        onChange={e => updateField("city", e.target.value)}
      />

      <input
        type="text"
        placeholder="Your Industry"
        value={data.industry}
        onChange={e => updateField("industry", e.target.value)}
      />
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.actions}>
        <button className={styles.nextBtn} onClick={handleNext}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default Step1;
