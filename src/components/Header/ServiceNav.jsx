import { Link } from "react-router-dom";
import { useState } from "react";
import logo from '../../assets/logo.png';
import styles from './Header.module.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import LanguageIcon from '@mui/icons-material/Language';
import { useLangChange } from "../../context/LanguageContext";

import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import Dropdown from "../DropDawn/Dropdawn";

const ServiceNav = () => {
  const { lang } = useLangChange();
  const [open, setOpen] = useState(false);

  const menuText = {
    eng: {
      about: "Customer Flow",
      cases: "Referral System",
    },
    de: {
      about: "Kundenfluss",
      cases: "Empfehlungssystem",
    },
  };

  const t = lang === "eng" ? menuText.eng : menuText.de;

  return (
    <div className={styles.main_container}>
      <Link to="/"><img src={logo} alt="logo" /></Link>

      <div className={styles.navbar_container}>
        <div className={styles.dropdown}>
  <button
    className={styles.dropdown__btn}
    onClick={() => setOpen(!open)}
  >
    <p>
      {lang === "eng"
        ? "Partnership Models ∨"
        : "Partnerschaftsmodelle ∨"}
    </p>
  </button>

  {open && (
    <div className={styles.dropdown__menu}>
      <div className={`${styles.dropdown__item} ${styles.active}`}>
        {t.about}
      </div>
      <div className={styles.dropdown__item}>{t.cases}</div>
    </div>
  )}
</div>

        <p>{lang === "eng" ? "Requirements" : "Anforderungen"}</p>
        <p>{lang === "eng" ? "Resource Base" : "Ressourcenbasis"}</p>
        <Dropdown/>
      </div>

      <div className={styles.right_container}>
        <LightModeIcon />

        <div className={styles.language_container}>
          <LanguageDropdown />
        </div>
      </div>
    </div>
  );
};

export default ServiceNav;
