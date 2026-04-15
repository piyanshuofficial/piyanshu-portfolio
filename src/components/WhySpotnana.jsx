import styles from "./WhySpotnana.module.css";
import { LINKEDIN_URL, EMAIL } from "@/config/links";

/* COMPANY_SPECIFIC_SECTION -- update for each org */
export default function WhySpotnana() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        {/* COMPANY_SPECIFIC_SECTION -- update for each org */}
        <p className={styles.label}>WHY SPOTNANA</p>

        <div className={styles.content}>
          <p className={styles.para}>
            Travel is a $1.5 trillion industry running on decades-old infrastructure.
            The product opportunity — building the data foundation that makes autonomous,
            agentic travel possible — is one of the most interesting in enterprise software
            right now.
          </p>

          <p className={styles.para}>
            I don't have a travel background. But I've spent ten years building products
            where data reliability, real-time accuracy, and operator trust are
            non-negotiable. The problems of making an AI agent trustworthy enough to act
            autonomously, or building a data layer that powers decisions rather than just
            dashboards — those are product problems I understand structurally, even if the
            domain is new.
          </p>

          <p className={styles.para}>
            I'm applying for the AI &amp; Data and Agent Assistance teams. I'd like to talk.
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
