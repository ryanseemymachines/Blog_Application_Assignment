import styles from "./index.module.css";

function CreateBlogButton({ type, title, onClick }) {
  return (
    <button className={styles.createBtn} type={type} onClick={onClick}>
      {title}
    </button>
  );
}

export default CreateBlogButton;
