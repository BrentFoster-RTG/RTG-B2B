import styles from "./ContactForm.module.scss";
import Button from "../Button/Button";

const ContactForm = ({ onSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Ask a Question</h3>
      <p>Our team members are always there to clarify important information.</p>

      <input placeholder="Your name" />
      <input placeholder="Your email" />
      <textarea placeholder="Your question" />

      <label className={styles.checkbox}>
        <input type="checkbox" /> I agree with Privacy Policy
      </label>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ContactForm;
