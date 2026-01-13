import { useMemo, useState } from "react";
import { filesData } from "../data/files.data";

export const useFilesFilter = () => {
  const [search, setSearch] = useState("");
  const [activeCategories, setActiveCategories] = useState([]);

  const groupedCategories = useMemo(() => {
    return filesData.reduce((acc, file) => {
      if (!acc[file.group]) acc[file.group] = new Set();
      acc[file.group].add(file.category);
      return acc;
    }, {});
  }, []);

  const toggleCategory = (category) => {
    setActiveCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category) 
        : [...prev, category]                
    );
  };

  const clearCategories = () => {
    setActiveCategories([]);
  };

  const filteredFiles = useMemo(() => {
    return filesData.filter((file) => {
      const matchCategory =
        activeCategories.length === 0 ||
        activeCategories.includes(file.category);

      const matchSearch = file.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategories, search]);

  return {
    files: filteredFiles,
    groupedCategories,
    activeCategories,
    toggleCategory,
    clearCategories,
    search,
    setSearch,
  };
};
