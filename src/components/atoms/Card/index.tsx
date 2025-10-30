import styles from "./Card.module.css";

type CardProps = {
  name: string;
  owner: string;
  description: string;
  rate: number;
  topics?: string[];
};

export default function Card({
  name,
  owner,
  description,
  rate,
  topics,
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
      <p id="description" className={styles.description} title={description}>
        {description}
      </p>
      <div id="topics" className={styles.topics}>
        {topics?.slice(0, 5).map((item) => (
          <span>{item}</span>
        ))}
      </div>
    </div>
  );
}
