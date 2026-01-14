import { Link, NavLink } from "react-router-dom";
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

      <nav className={styles.navbar_container}>
        <NavLink to="/corporate-clients">
          {lang === "eng" ? "Corporate Clients" : "Unternehmensklienten"}
        </NavLink>

        <NavLink to="/travel-agents">
          {lang === "eng" ? "Travel Agents" : "Reisebüros"}
        </NavLink>

        <NavLink to="/educators">
          {lang === "eng" ? "Educators" : "Bildungsanbieter"}
        </NavLink>

        <NavLink to="/service-providers">
          {lang === "eng" ? "Service Providers" : "Dienstleister"}
        </NavLink>
      </nav>

      <div className={styles.right_container}>
        <LightModeIcon />
        <LanguageDropdown />
      </div>
    </header>
  );
};

export default Header;
