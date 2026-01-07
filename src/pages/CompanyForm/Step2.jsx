import { useFormData } from "../../context/FormContext";
import styles from "./Step2.module.scss";
import { useState } from "react";

const Step2 = ({ next, back }) => {
  const { data, updateField } = useFormData();
  const [error, setError] = useState("");

  const handleNext = () => {
    if (
      !data.purpose ||
      !data.groupSize
    ) {
      setError("Please fill in all required fields");
      return;
    }

    setError("");
    next();
  };
  return (
    <div className={styles.card}>
      <span className={styles.step}>Step 2/3</span>

      <div className={styles.progress}>
        <div className={styles.progressFill} />
      </div>

      <h2 className={styles.title}>How can we help?</h2>
      <p className={styles.subtitle}>
        Please provide details about your custom request
      </p>

      <div className={styles.field}>
        <label>Purpose of experience *</label>
        <input
          type="text"
          placeholder="Internal Event / Executive Retreat / Other"
          value={data.purpose || ""}
          onChange={(e) => updateField("purpose", e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Approximate Group Size *</label>
        <input
          type="number"
          placeholder="Amount of participants"
          value={data.groupSize || ""}
          onChange={(e) => updateField("groupSize", e.target.value)}
        />
      </div>

      <div className={styles.field}>
  <label>Start date </label>
  <input
    type="date"
    value={data.startDate || ""}
    onChange={(e) => updateField("startDate", e.target.value)}
  />
</div>
      <div className={styles.field}>
        <label>Budget per person / event (€)</label>
        <input
          type="number"
          placeholder="5"
          value={data.budget || ""}
          onChange={(e) => updateField("budget", e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Custom Requests</label>

        <div className={styles.checkboxes}>
          <label>
            <input
              type="checkbox"
              checked={!!data.transportation}
              onChange={(e) =>
                updateField("transportation", e.target.checked)
              }
            />
            Transportation
          </label>

          <label>
            <input
              type="checkbox"
              checked={!!data.accommodation}
              onChange={(e) =>
                updateField("accommodation", e.target.checked)
              }
            />
            Accommodation
          </label>

          <label>
            <input
              type="checkbox"
              checked={!!data.premium}
              onChange={(e) =>
                updateField("premium", e.target.checked)
              }
            />
            Premium service
          </label>

          <label>
            <input
              type="checkbox"
              checked={!!data.other}
              onChange={(e) => updateField("other", e.target.checked)}
            />
            Other
          </label>
        </div>

        <input
          type="text"
          placeholder="Other custom request"
          value={data.otherRequest || ""}
          onChange={(e) => updateField("otherRequest", e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label>Comment</label>
        <textarea
          placeholder="Give additional details about your request"
          value={data.comment || ""}
          onChange={(e) => updateField("comment", e.target.value)}
        />
      </div>
              {error && <p className={styles.error}>{error}</p>}
      <div className={styles.actions}>
        <button className={styles.back} onClick={back}>
          Back
        </button>
        <button className={styles.next} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
