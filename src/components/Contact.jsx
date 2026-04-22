import styles from "./Contact.module.css";
import { LINKEDIN_URL, EMAIL } from "@/config/links";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <p className={styles.label}>OPEN TO WORK</p>

        <div className={styles.content}>
          <p className={styles.para}>
            I'm a Senior Product Manager with ~10 years in B2B product, currently
            exploring roles in AI, agentic systems, and data platforms.
          </p>

          <p className={styles.para}>
            I specialize in complex, integration-heavy products — from platform
            architecture and API design to go-to-market and commercial execution.
            If you're building something ambitious and need a PM who can go deep
            technically and commercially, let's connect.
          </p>

          <div className={styles.ctaRow}>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaPrimary}
            >
              Connect on LinkedIn
            </a>
            <a href={EMAIL} className={styles.ctaSecondary}>
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
