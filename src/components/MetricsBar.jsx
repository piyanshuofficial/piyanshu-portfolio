import styles from "./MetricsBar.module.css";

const metrics = [
  { value: "Rs.24 Cr+", label: "ARR Managed & Built" },
  { value: "800+", label: "Enterprise Deployments" },
  { value: "13,144", label: "Lines in FRD (SpectraOne)" },
  { value: "40+", label: "APIs Built (Claude Code)" },
  { value: "4", label: "Products Launched 0→1" },
];

// Duplicate for seamless marquee loop
const marqueeItems = [...metrics, ...metrics];

export default function MetricsBar() {
  return (
    <div className={styles.wrapper} id="work">
      <div className={styles.track}>
        <div className={styles.marquee}>
          {marqueeItems.map((m, i) => (
            <div className={styles.metric} key={i}>
              <span className={styles.value}>{m.value}</span>
              <span className={styles.label}>{m.label}</span>
              <span className={styles.divider} aria-hidden="true">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
