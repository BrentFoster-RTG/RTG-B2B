import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import styles from './Header.module.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import LanguageIcon from '@mui/icons-material/Language';
import { useLangChange } from "../../context/LanguageContext";

import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import Dropdown from "../DropDawn/Dropdawn";

const CorporatedNav = () => {
  const { lang } = useLangChange();

  return (
    <div className={styles.main_container}>
      <Link to="/"><img src={logo} alt="logo" /></Link>

      <div className={styles.navbar_container}>
        <p>{lang === "eng" ? "Corporate Solutions" : "Unternehmenslösungen"}</p>
        <p>{lang === "eng" ? "Custom Experience" : "Individuelles Erlebnis"}</p>
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

export default CorporatedNav;
