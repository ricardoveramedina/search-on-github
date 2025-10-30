import { useRef, useState } from "react";
import SearchBar from "@components/atoms/SearchBar";
import DataGrid from "@components/organisms/DataGrid";
import { search } from "@lib/services/githubServices";
import { GithubDataType } from "@root/types/GithubDataType";
import useDebounce from "@root/hooks/useDebounce";
import styles from "./Main.module.css";

export default function Main() {
  const searchText = useRef<string>("");
  const [loading, setLoading] = useState(false);
  const defaultData = { total: 0, items: [] };
  const [data, setData] = useState<GithubDataType>(defaultData);
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearch = async (page: number, text: string) => {
    setLoading(true);
    searchText.current = text;
    setCurrentPage(page);
    if (text) {
      const data: any = await search(page, text, text);
      setData(data);
    } else {
      setData(defaultData);
    }
    setLoading(false);
  };
  const debounceSearch = useDebounce(handleSearch, 1000);

  return (
    <div className={styles.main}>
      <h1>Search on Github</h1>
      <SearchBar onSearch={(text: string) => debounceSearch(1, text)} />
      <DataGrid
        data={data}
        loading={loading}
        currentPage={currentPage}
        pageHandler={(page: number) => debounceSearch(page, searchText.current)}
      />
    </div>
  );
}
