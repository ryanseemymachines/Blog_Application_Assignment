import styles from "./index.module.css";

function TextArea({ name, placeholder, value, onChange }) {
  return (
    <div>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.textAreaInput}
      />
    </div>
  );
}

export default TextArea;
