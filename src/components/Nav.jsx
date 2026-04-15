"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <span className={styles.logo}>Piyanshu Agrawal</span>
        <ul className={styles.links}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Work</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#why-spotnana" className={styles.spotnanaLink}>Why Spotnana</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
