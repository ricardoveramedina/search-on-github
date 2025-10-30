import React, { useState, useEffect } from "react";
import styles from "./PaginationButtons.module.css";

type PaginationButtonsProps = {
  count: number;
  handleClick: Function;
  currentPage?: number;
  limit?: number;
};

export default function PaginationButtons({
  count,
  handleClick,
  currentPage = 1,
  limit = 3,
}: PaginationButtonsProps) {
  const [page, setPage] = useState(currentPage);

  const handleChange = (
    _: React.MouseEvent<HTMLButtonElement>,
    value: number
  ) => {
    handleClick(value);
    setPage(value);
  };

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <div className={styles.primary}>
      <button
        disabled={page - 1 === 0}
        onClick={(event) => handleChange(event, page - 1)}
      >
        ◀
      </button>
      {[...Array(count)].map((_, i) => {
        const pageNum: number = i + 1;
        const half: number = Math.floor(limit / 2);
        let start: number = page - half > 1 ? page - half : 1;
        let end: number = start + limit - 1 < count ? start + limit - 1 : count;
        if (end - start + 1 < limit) {
          start = end - limit + 1 > 1 ? end - limit + 1 : 1;
        }
        if (pageNum < start || pageNum > end) return null;
        return (
          <button
            key={pageNum}
            className={pageNum === page ? styles.active : ""}
            onClick={(event) => handleChange(event, pageNum)}
          >
            {pageNum}
          </button>
        );
      })}
      <button
        disabled={page + 1 > count}
        onClick={(event) => handleChange(event, page + 1)}
      >
        ▶
      </button>
    </div>
  );
}
