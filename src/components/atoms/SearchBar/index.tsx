import React from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: Function;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function SearchBar({ onSearch, ...inputProps }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="search"
      id="search"
      className={styles.primary}
      onChange={(event) => onSearch(event.target.value)}
      {...inputProps}
    />
  );
}
