import styles from "./Card.module.css";

type CardProps = {
  name: string;
  owner: string;
  description: string;
  tags?: string[];
  rate: number;
};

export default function Card({
  name,
  owner,
  description,
  rate,
  tags,
}: CardProps) {
  return (
    <div className={styles.container}>
      <div id="title" className={styles.title}>
        <h3 id="name" className={styles.name}>
          {name}
        </h3>
        <h4 id="owner" className={styles.owner}>
          by {owner} ⭐ {rate}
        </h4>
      </div>
      <div id="description" className={styles.description}>
        {description}
      </div>
      <div id="tags" className={styles.tags}>
        {tags?.map((item) => {
          return <span>{item}</span>;
        })}
      </div>
    </div>
  );
}
