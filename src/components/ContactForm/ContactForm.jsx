import styles from "./ContactForm.module.scss";
import Button from "../Button/Button";
import Checkbox from "@mui/material/Checkbox";
import CustomCheckbox from "../../ui/CustomCheckbox/CustomCheckbox";

const ContactForm = ({ onSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Ask a Question</h3>
      <p>Our team members are always there to clarify important information.</p>

      <label>
        Name
        <input placeholder="Your name" />
      </label>

      <label>
        Email
        <input placeholder="Your email" />
      </label>

      <label>
        How can we help?
        <textarea placeholder="Your question" />
      </label>

      <label className={styles.checkbox}>
        <CustomCheckbox/> I agree with Privacy Policy
      </label>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ContactForm;
