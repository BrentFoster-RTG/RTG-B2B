import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Header.module.scss";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useLangChange } from "../../context/LanguageContext";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

const Header = () => {
  const { lang } = useLangChange();
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsFloating(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.main_container} ${
        isFloating ? styles.floating : ""
      }`}
    >
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className={styles.navbar_container}>
        <p>{lang === "eng" ? "Corporate Clients" : "Unternehmensklienten"}</p>
        <p>{lang === "eng" ? "Travel Agents" : "Reisebüros"}</p>
        <p>{lang === "eng" ? "Educators" : "Bildungsanbieter"}</p>
        <p>{lang === "eng" ? "Service Providers" : "Dienstleister"}</p>
      </div>

      <div className={styles.right_container}>
        <LightModeIcon />
        <LanguageDropdown />
      </div>
    </header>
  );
};

export default Header;
