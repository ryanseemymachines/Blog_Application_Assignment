import styles from "./index.module.css";

const CloseButton = ({ type, onClick }) => {
  return (
    <button className={styles.closeBtn} type={type} onClick={onClick}>
      <i class="fa-solid fa-xmark"></i>
    </button>
  );
};

export default CloseButton;
