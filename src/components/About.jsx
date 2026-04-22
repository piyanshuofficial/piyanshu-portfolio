import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <p className={styles.label}>ABOUT ME</p>

        <div className={styles.columns}>
          {/* Left: pull quote */}
          <div className={styles.quoteCol}>
            <blockquote className={styles.pullQuote}>
              "I don't just write specs. I build the thing."
            </blockquote>
          </div>

          {/* Right: narrative paragraphs */}
          <div className={styles.textCol}>
            <p className={styles.para}>
              I have ~10 years of professional experience, with the last 7 in product management at Spectra - a B2B managed connectivity company. I joined as an enterprise account manager, moved into product within a year, and have since owned the company's primary revenue product (500+ sites, ~ INR.18 Cr+ ARR) while simultaneously launching four new product lines from scratch.
            </p>

            <p className={styles.para}>
              My most unusual credential as a PM: when the engineering team could not start on the SpectraOne platform backend, I built it myself -- 40+ REST APIs, 24 database tables, JWT authentication with RBAC, all working in production using Claude Code. What IT estimated at 125 days, I delivered independently. The same platform started with a 13,144-line functional requirements document I authored before a single line of code was written.
            </p>

            <p className={styles.para}>
              I work at the intersection of product strategy, technical depth, and commercial execution. I've written API specifications, negotiated vendor contracts at the clause level, built financial models for AOP cycles, and designed training programs for 50-person sales teams — often for the same product.
            </p>

            <p className={styles.para}>
              I'm drawn to problems where data reliability and trustworthy AI decisions matter — not just technically, but commercially. Building infrastructure that makes autonomous AI systems trustworthy enough to act on a user's behalf, or the data layer that powers real decisions rather than just dashboards — these are the problems I want to work on next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
