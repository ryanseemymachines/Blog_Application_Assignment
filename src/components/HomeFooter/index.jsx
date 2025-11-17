import styles from "./index.module.css";

function HomeFooter() {
  return (
    <footer className={styles.footerGrp}>
      <section className={styles.copyrightGrp}>
        <b>© 2025 BlogIt.</b>
        <p>All rights reserved.</p>
      </section>
      <section className={styles.socialsGrp}>
        <ul>
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <i class="fa-brands fa-facebook"></i>Facebook
            </a>
          </li>
          <li>
            <a href="https://x.com/" target="_blank">
              <i class="fa-brands fa-twitter"></i>Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <i class="fa-brands fa-instagram"></i>Instagram
            </a>
          </li>
          <li>
            <a href="https://in.linkedin.com/" target="_blank">
              <i class="fa-brands fa-linkedin"></i>LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default HomeFooter;

