import styles from "./index.module.css";

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.inputField}
    />
  );
};

export default Input;
