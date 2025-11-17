import styles from './index.module.css';

function AddPostButton({ type, title }) {
  return (
    <div>
      <button className={styles.addBtn} type={type}>
        {title}
      </button>
    </div>
  );
}

export default AddPostButton;
