import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import styles from './Footer.module.scss';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useLangChange } from "../../context/LanguageContext";

const Footer = () => {
  const { lang } = useLangChange();

  const texts = {
    partners: lang === "eng" ? ["Corporate clients", "Tour Agents", "Educators", "Service providers"]
                           : ["Unternehmensklienten", "Reisebüros", "Bildungsanbieter", "Dienstleister"],
    solutions: lang === "eng" ? ["Corporate Solutions", "Educational Solutions", "Custom Solutions", "Partnership Models"]
                             : ["Unternehmenslösungen", "Bildungslösungen", "Maßgeschneiderte Lösungen", "Partnerschaftsmodelle"],
    about: lang === "eng" ? ["Our Company", "Cases", "Resource Base", "Contacts"]
                         : ["Unser Unternehmen", "Fälle", "Ressourcen", "Kontakte"],
    legal: lang === "eng" ? ["Terms", "Privacy", "Cookies", "GDPR"]
                         : ["AGB", "Datenschutz", "Cookies", "DSGVO"],
    description: lang === "eng" 
      ? "B2B Experiences & Event Solutions in Hamburg, Germany" 
      : "B2B-Erfahrungen & Event-Lösungen in Hamburg, Deutschland",
    copyright: lang === "eng"
      ? "© 2026 | RTG Touristic GmbH. | All rights reserved."
      : "© 2026 | RTG Touristic GmbH. | Alle Rechte vorbehalten."
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.upper_container}>
        <div className={styles.logo_container}>
          <Link to="/"><img src={logo} alt="Logo" /></Link>
          <p>{texts.description}</p>
        </div>

        <div className={styles.footer_navbar}>
          <h4>Partners</h4>
          {texts.partners.map((item, index) => <p key={index}>{item}</p>)}
        </div>

        <div className={styles.footer_navbar}>
          <h4>Solutions</h4>
          {texts.solutions.map((item, index) => <p key={index}>{item}</p>)}
        </div>

        <div className={styles.footer_navbar}>
          <h4>About</h4>
          {texts.about.map((item, index) => <p key={index}>{item}</p>)}
        </div>

        <div className={styles.footer_navbar}>
          <h4>Legal</h4>
          {texts.legal.map((item, index) => <p key={index}>{item}</p>)}
        </div>
      </div>

      <div className={styles.lower_container}>
        <p>{texts.copyright}</p>
        <div className={styles.icons_container}>
          <XIcon color="disabled"/>
          <LinkedInIcon color="disabled"/>
          <FacebookIcon color="disabled"/>
          <GitHubIcon color="disabled"/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
