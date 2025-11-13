import React from 'react';
import styles from './index.module.css'

function Header(props) {
  return (
    <div className={styles.headerList}>
        <p>{props.title}</p>
    </div>
  )
}

export default Header;