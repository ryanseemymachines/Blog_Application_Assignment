import styles from "./index.module.css";

const AddPostButton = ({ type, title }) => {
  return (
    <button className={styles.addBtn} type={type}>
      {title}
    </button>
  );
};

export default AddPostButton;
