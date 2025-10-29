import PaginationButtons from "@components/atoms/PaginationButtons";
import styles from "./Pagination.module.css";

type PaginationProps = {
  page: number;
  totalPages: number;
  totalRecords: number;
  handleClick: Function;
};

export default function Pagination({
  page,
  totalPages,
  totalRecords,
  handleClick,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <span>Page: {totalPages && `${page} of ${totalPages}`}</span>
      <span>{totalRecords || 0} Found</span>
      <PaginationButtons count={totalPages} handleClick={handleClick} />
    </div>
  );
}
