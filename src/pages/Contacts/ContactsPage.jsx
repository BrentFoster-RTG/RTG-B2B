import { useState } from "react";
import styles from "./ContactsPage.module.scss";
import ContactInfoCard from "../../components/ContactInfoCard/ContactInfoCard";
import ContactForm from "../../components/ContactForm/ContactForm";
import SuccessMessage from "../../components/SuccessMessage/SuccessMessage";

const ContactsPage = () => {
  const [success, setSuccess] = useState(false);

  return (
    <div className={styles.layout}>
      <ContactInfoCard />

      <div
        className={`${styles.formWrapper} ${
          success ? styles.success : ""
        }`}
      >
        {success ? (
          <SuccessMessage onClose={() => setSuccess(false)} />
        ) : (
          <ContactForm onSuccess={() => setSuccess(true)} />
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
