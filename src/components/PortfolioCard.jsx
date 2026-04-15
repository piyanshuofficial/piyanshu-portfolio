import styles from "./PortfolioCard.module.css";

export default function PortfolioCard({ tag, title, description, stats, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.top}>
        <span className={styles.tag}>{tag}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.stats}>
        {stats.map((stat, i) => (
          <span className={styles.stat} key={i}>
            {stat}
          </span>
        ))}
      </div>

      <div className={styles.footer}>
        <span className={styles.viewLink}>
          View Live <span className={styles.arrow}>→</span>
        </span>
      </div>
    </a>
  );
}
