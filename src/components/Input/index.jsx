import styles from './index.module.css'

function Input({ type, name, placeholder, value, onChange }) {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.inputField}
        />
    </div>
  );
}

export default Input;
