import styles from './index.module.css';

function CloseButton({type , onClick}) {
  return (
    <div>
        <button className={styles.closeBtn} type={type} onClick={onClick}>
            <i class="fa-solid fa-xmark"></i>
        </button>
    </div>
  )
}

export default CloseButton;