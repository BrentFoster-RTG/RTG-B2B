import styles from "./SearchInput.module.scss";

const SearchInput = ({ value, onChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchInput;
