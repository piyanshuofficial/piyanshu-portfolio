import styles from "./Skills.module.css";

const productSkills = [
  "0 to 1 Product Launches",
  "Platform & API Product Management",
  "Integration-Heavy Systems",
  "Data & Reporting Infrastructure",
  "B2B Go-to-Market Strategy",
  "Pricing Architecture & Financial Modelling",
  "Functional Requirements Specification",
  "RBAC & Permission System Design",
  "Vendor Evaluation & Contract Negotiation",
  "Cross-functional Delivery Leadership",
];

const technicalTools = [
  "Claude Code (production AI-assisted development)",
  "Cursor",
  "React / JavaScript (specification & direction)",
  "REST API Design & Documentation",
  "JWT / OAuth2 / RBAC Architecture",
  "SQL (working knowledge)",
  "Jira / Confluence",
  "Figma",
  "Amplitude / Mixpanel (product analytics)",
  "Postman (API testing & validation)",
];

export default function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <p className={styles.label}>CRAFT</p>

        <div className={styles.columns}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Product Skills</h3>
            <ul className={styles.list}>
              {productSkills.map((skill, i) => (
                <li className={styles.item} key={i}>
                  <span className={styles.bullet}>▸</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Technical & Tools</h3>
            <ul className={styles.list}>
              {technicalTools.map((tool, i) => (
                <li className={styles.item} key={i}>
                  <span className={styles.bullet}>▸</span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.note}>
          // I write specs engineers can build from, design APIs before a line of code is
          written, and occasionally build the thing myself when the situation demands it.
        </p>
      </div>
    </section>
  );
}
