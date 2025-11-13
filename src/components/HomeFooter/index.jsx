import React from 'react';
import styles from './index.module.css';

function HomeFooter() {
  return (
    <div className={styles.footerGrp}>
        <section className={styles.copyrightGrp}>
            <b>© 2025 BlogIt.</b>
            <p>All rights reserved.</p>
        </section>
        <section className={styles.socialsGrp}>
            <ul>
                <li><a><i class="fa-brands fa-facebook"></i>Facebook</a></li>
                <li><a><i class="fa-brands fa-twitter"></i>Twitter</a></li>
                <li><a><i class="fa-brands fa-instagram"></i>Instagram</a></li>
                <li><a><i class="fa-brands fa-linkedin"></i>LinkedIn</a></li>
            </ul>
        </section>
    </div>
  )
}

export default HomeFooter;