import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.animatedBg} aria-hidden="true">
        <div className={`${styles.planet} ${styles.planet1}`}></div>
        <div className={`${styles.planet} ${styles.planet2}`}></div>
        <div className={`${styles.planet} ${styles.planet3}`}></div>
        <div className={`${styles.planet} ${styles.planet4}`}></div>
        <div className={`${styles.ring}`}></div>
        <div className={`${styles.ring} ${styles.ring2}`}></div>
        <div className={`${styles.star} ${styles.star1}`}></div>
        <div className={`${styles.star} ${styles.star2}`}></div>
        <div className={`${styles.star} ${styles.star3}`}></div>
        <div className={`${styles.star} ${styles.star4}`}></div>
        <div className={`${styles.star} ${styles.star5}`}></div>
      </div>
      <Head>
        <title>About Think India</title>
        <meta name="description" content="Learn more about Think India organization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <div className="logo">
          <Link href="/">
            <span>Think India</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about" className="active">About</Link>
          </li>
          <li>
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/#events">Events</Link>
          </li>
          <li>
            <Link href="/#team">Team</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>About Think India</h1>
          <p className={styles.subtitle}>Empowering the Future of India</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <div className={styles.content}>
            <p>
              Think India is dedicated to fostering leadership, innovation, and social responsibility among students. We aim to create a platform where young minds can contribute to nation-building through various initiatives and programs.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <div className={styles.content}>
            <p>
              To be the leading student organization that nurtures future leaders who are committed to India's development and progress, combining traditional values with modern innovation.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <div className={styles.content}>
            <p>
              Think India was established with the vision of creating a platform for students to engage in meaningful discussions and actions that contribute to India's growth. Over the years, we have organized numerous events, workshops, and initiatives that have impacted thousands of students across the country.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Achievements</h2>
          <div className={styles.content}>
            <ul className={styles.achievementList}>
              <li className={styles.achievementItem}>Successfully organized multiple national conventions</li>
              <li className={styles.achievementItem}>Conducted numerous leadership development workshops</li>
              <li className={styles.achievementItem}>Launched various social impact initiatives</li>
              <li className={styles.achievementItem}>Built a strong network of student leaders across India</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <div className={styles.content}>
            <p>
              Our team consists of dedicated students and professionals who are passionate about making a difference. We work together to create impactful programs and initiatives that help shape the future of India.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
} 