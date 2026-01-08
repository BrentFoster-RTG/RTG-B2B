import { useState } from "react";
import styles from "./Dropdawn.module.scss";
import { useLangChange } from "../../context/LanguageContext";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const { lang } = useLangChange();

  const menuText = {
    eng: {
      about: "About Us",
      cases: "Case Studies",
      contacts: "Contacts",
      terms: "Terms",
    },
    de: {
      about: "Über uns",
      cases: "Fallstudien",
      contacts: "Kontakte",
      terms: "AGB",
    },
  };

  const t = lang === "eng" ? menuText.eng : menuText.de;

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdown__btn} onClick={() => setOpen(!open)}>
        <p>{lang === "eng" ? "About us ∨" : "Über uns ∨"}</p>
      </button>

      {open && (
        <div className={styles.dropdown__menu}>
          <div className={`${styles.dropdown__item} ${styles.active}`}>{t.about}</div>
          <div className={styles.dropdown__item}>{t.cases}</div>
          <div className={styles.dropdown__item}>{t.contacts}</div>
          <div className={styles.dropdown__item}>{t.terms}</div>
        </div>
      )}
    </div>
  );
}
