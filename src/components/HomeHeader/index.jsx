import React from "react";
import styles from "./index.module.css";

function HomeHeader() {
  return (
    <div className={styles.headerContainer}>
      <h1>BlogIt</h1>
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
    </div>
  );
}

export default HomeHeader;
