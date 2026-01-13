import SearchInput from "../SearchInput/SearchInput";
import styles from "./Sidebar.module.scss";

const Sidebar = ({
  groupedCategories,
  activeCategories,
  toggleCategory,
  clearCategories,
  search,
  onSearchChange,
}) => {
  return (
    <aside className={styles.sidebar}>
      <SearchInput value={search} onChange={onSearchChange} />

      {activeCategories.length > 0 && (
        <div className={styles.selected}>
          <div className={styles.selectedHeader}>
            <span>Selected</span>
            <button onClick={clearCategories}>Clear all</button>
          </div>

          <div className={styles.tags}>
            {activeCategories.map((cat) => (
              <span
                key={cat}
                className={styles.tag}
                onClick={() => toggleCategory(cat)}
              >
                {cat} ✕
              </span>
            ))}
          </div>
        </div>
      )}

      {Object.entries(groupedCategories).map(([group, categories]) => (
        <div key={group} className={styles.group}>
          <h4 className={styles.groupTitle}>{group}</h4>

          <ul className={styles.list}>
            {[...categories].map((category) => {
              const isActive = activeCategories.includes(category);

              return (
                <li
                  key={category}
                  className={`${styles.item} ${
                    isActive ? styles.active : ""
                  }`}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
