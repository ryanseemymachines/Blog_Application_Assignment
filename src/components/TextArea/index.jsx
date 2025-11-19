import styles from "./index.module.css";

const TextArea = ({ name, placeholder, value, onChange }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.textAreaInput}
    />
  );
};

export default TextArea;
