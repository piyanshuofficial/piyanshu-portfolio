import PortfolioCard from "./PortfolioCard";
import styles from "./Portfolio.module.css";
import { SPECTRAONE_URL, SELFCARE_URL, LOGIN_TESTER_URL } from "@/config/links";

const cards = [
  {
    tag: "Enterprise Platform | React | RBAC",
    title: "SpectraOne — Enterprise WiFi Management Portal",
    description:
      "A multi-tenant enterprise platform managing 500+ WiFi deployments across India. Built with a 13,144-line functional requirements document, 11 user roles across a 4-tier RBAC hierarchy, real-time dashboards, 34 report types, and bulk operations. I directed the 87,982-line React frontend and independently built the backend (40+ APIs, 24 DB tables) using Claude Code.",
    stats: [
      "87,982 lines of React",
      "56+ components",
      "11 RBAC roles",
      "34 report types",
      "70+ API endpoints",
    ],
    href: SPECTRAONE_URL,
  },
  {
    tag: "Customer Portal | Self-Service | UX",
    title: "Spectra WiFi Self-Care Portal",
    description:
      "A customer-facing self-service portal allowing end users to manage their WiFi plans, view usage, raise support requests, and manage their devices — without operator intervention. Designed to reduce support load while improving user experience across PG, hotel, and enterprise segments.",
    stats: [
      "Self-serve plan management",
      "Real-time usage visibility",
      "Multi-segment support",
      "Mobile-first design",
    ],
    href: SELFCARE_URL,
  },
  {
    tag: "Developer Tool | Authentication | Testing",
    title: "WiFi Captive Portal Login Tester",
    description:
      "A developer and QA tool for testing WiFi captive portal login flows across 17 authentication methods — OTP (SMS/WhatsApp/Email), Social Login (Google/Facebook/Apple), SSO (SAML/OAuth2), MAC Auth, Voucher Auth, and more. Built to validate authentication UX across 26 segment-authentication configurations without needing live network infrastructure.",
    stats: [
      "17 authentication methods",
      "26 segment configurations",
      "Zero live network dependency",
      "QA and demo-ready",
    ],
    href: LOGIN_TESTER_URL,
  },
];

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <p className={styles.label}>BUILT WORK</p>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <PortfolioCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
