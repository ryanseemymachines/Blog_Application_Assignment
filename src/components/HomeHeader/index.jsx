import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

const HomeHeader = () => {
  const navLinkStyles = ({ isActive }) =>
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <header className={styles.headerContainer}>
      <NavLink to="/" className={styles.logoLink}>
        <h1 className={styles.logo}>BlogIt</h1>
      </NavLink>

      <nav className={styles.navGrp}>
        <NavLink to="/" className={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/about" className={navLinkStyles}>
          About
        </NavLink>
        <NavLink to="/contact" className={navLinkStyles}>
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
}

export default HomeHeader;
