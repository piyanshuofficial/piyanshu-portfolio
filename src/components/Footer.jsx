import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.left}>Piyanshu Agrawal — Senior Product Manager</span>
          <span className={styles.right}>
            piyanshu@gmail.com&nbsp;&nbsp;|&nbsp;&nbsp;+91 99680 01619&nbsp;&nbsp;|&nbsp;&nbsp;Noida, India
          </span>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 — Built with React</span>
        </div>
      </div>
    </footer>
  );
}
