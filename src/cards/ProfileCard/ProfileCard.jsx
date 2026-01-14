import styles from "./ProfileCard.module.scss";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import erikPhoto from '../../assets/image.png'

export default function ProfileCard() {
  return (
    <div className={styles.card}>
      <img
        src={erikPhoto}
        alt="Eric Smith"
        className={styles.avatar}
      />

      <h4>Eric Smith</h4>
      <span className={styles.pos}>Founder & CEO</span>

      <div className={styles.socials}>
        <XIcon />
        <LinkedInIcon />
        <FacebookIcon />
        <GitHubIcon />
      </div>
    </div>
  );
}
