import Card from "@components/atoms/Card";
import Pagination from "@root/components/molecules/Pagination";
import loadingGif from "@assets/spinning-loading.gif";
import styles from "./DataGrid.module.css";
import { GithubDataType } from "@root/types/GithubDataType";

type DataGridProps = {
  data: GithubDataType;
  loading: boolean;
  currentPage: number;
  pageHandler: Function;
};

export default function DataGrid({
  data,
  loading,
  currentPage,
  pageHandler,
}: DataGridProps) {
  const totalPages: number = data ? Math.ceil(data.total / 10) : 1;
  const handleClick = (page: number) => pageHandler(page);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {loading && (
          <img src={loadingGif} alt="loading" className={styles.loading} />
        )}
        {data.items?.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              owner={item.owner}
              description={item.description}
              rate={item.rate}
              topics={item.topics}
            />
          );
        })}
      </div>
      <Pagination
        page={currentPage}
        totalPages={totalPages}
        totalRecords={data.total}
        handleClick={handleClick}
      />
    </div>
  );
}
