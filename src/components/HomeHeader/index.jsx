import styles from "./index.module.css";

function HomeHeader() {
  return (
    <header className={styles.headerContainer}>
        <h1 className={styles.logo}>BlogIt</h1>
        <nav className={styles.navGrp}>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default HomeHeader;
