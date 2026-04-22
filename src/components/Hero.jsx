"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { RESUME_URL } from "@/config/links";

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        {/* Mobile: photo appears first */}
        <div className={styles.photoWrapMobile}>
          <PhotoCircle photoError={photoError} setPhotoError={setPhotoError} size={180} />
        </div>

        <div className={styles.columns}>
          {/* Left column */}
          <div className={styles.textCol}>
            <h1 className={styles.headline}>
              <span className={styles.headlineMain}>Senior Product Manager</span>
              <span className={styles.headlineSub}>Builder. Platform Thinker. AI-Native.</span>
            </h1>

            <p className={styles.subheadline}>
              ~10 years in B2B product&nbsp;&nbsp;|&nbsp;&nbsp;Rs.24 Cr+ ARR across 800+ enterprise deployments&nbsp;&nbsp;|&nbsp;&nbsp; From 13,000-line specs to production backends -I build what I define
            </p>

            <p className={styles.description}>
              I build products that work — from 13,000-line functional specs to production backends built with Claude Code. Currently exploring Senior PM opportunities in AI, agentic systems, and data platforms.
            </p>

            <div className={styles.ctaRow}>
              <a href="#portfolio" className={styles.ctaPrimary}>
                View Portfolio
              </a>
              {/* TODO: Replace with actual resume PDF link */}
              <a href={RESUME_URL} className={styles.ctaSecondary} target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>

            {/* Terminal card */}
            <div className={styles.terminalCard}>
              <div className={styles.terminalDots}>
                <span></span><span></span><span></span>
              </div>
              <pre className={styles.terminalCode}>{`const profile = {
  name: "Piyanshu Agrawal",
  role: "Senior Product Manager",
  location: "Noida, India",
  company: "Shyam Spectra Pvt. Ltd.",
  experience: "~10 years",
  arr: "Rs.24 Cr+",
  deployments: "800+",
  tools: ["Claude Code", "Cursor", "React", "SQL"],
  superpower: "I write specs AND ship code"
};`}</pre>
            </div>
          </div>

          {/* Right column — photo (desktop only) */}
          <div className={styles.photoCol}>
            <div className={styles.photoHalo}>
              <PhotoCircle photoError={photoError} setPhotoError={setPhotoError} size={280} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoCircle({ photoError, setPhotoError, size }) {
  if (photoError) {
    return (
      <div
        className={styles.photoFallback}
        style={{ width: size, height: size }}
      >
        <span className={styles.initials}>PA</span>
        <span className={styles.photoHint}>// photo.jpg</span>
      </div>
    );
  }

  return (
    <div className={styles.photoFrame} style={{ width: size, height: size }}>
      <Image
        src="/photo.jpg" /* Photo served from /public/photo.jpg — replace with your actual photo. Accepted formats: .jpg or .png. Recommended: min 400x400px, square crop */
        alt="Piyanshu Agrawal"
        width={size}
        height={size}
        className={styles.photo}
        onError={() => setPhotoError(true)}
        priority
      />
    </div>
  );
}
