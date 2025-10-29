import React from "react";
import useOnSearch from "@root/hooks/useOnSearch";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: Function;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function SearchBar({ onSearch, ...inputProps }: SearchBarProps) {
  const { handleChange } = useOnSearch(onSearch);

  return (
    <input
      type="text"
      placeholder="search"
      id="search"
      className={styles.primary}
      onChange={(event) => handleChange(event)}
      {...inputProps}
    />
  );
}
