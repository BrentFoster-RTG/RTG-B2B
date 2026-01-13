import { useFilesFilter } from "../../hooks/useFilesFilter";
import Sidebar from "../../components/Sidebar/Sidebar";
import FileCard from "../../components/FilesCard/FilesCard";
import styles from "./FilesPage.module.scss";

const FilesPage = () => {
  const {
    files,
    groupedCategories,
    activeCategories,
    toggleCategory,
    clearCategories,
    search,
    setSearch,
  } = useFilesFilter();

  return (
    <div className={styles.layout}>
      <Sidebar
        groupedCategories={groupedCategories}
        activeCategories={activeCategories}
        toggleCategory={toggleCategory}
        clearCategories={clearCategories}
        search={search}
        onSearchChange={setSearch}
      />

      <section className={styles.cards}>
        {files.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </section>
    </div>
  );
};

export default FilesPage;
