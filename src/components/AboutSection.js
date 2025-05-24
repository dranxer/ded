import React from 'react';
import styles from '../styles/AboutSection.module.css';
import Journey from './Journey';

const AboutSection = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.animatedBg} aria-hidden="true">
        <div className={`${styles.planet} ${styles.planet1}`}></div>
        <div className={`${styles.planet} ${styles.planet2}`}></div>
        <div className={`${styles.planet} ${styles.planet3}`}></div>
        <div className={`${styles.planet} ${styles.planet4}`}></div>
        <div className={`${styles.planet} ${styles.planet5}`}></div>
        <div className={`${styles.ring}`}></div>
        <div className={`${styles.ring} ${styles.ring2}`}></div>
        <div className={`${styles.star} ${styles.star1}`}></div>
        <div className={`${styles.star} ${styles.star2}`}></div>
        <div className={`${styles.star} ${styles.star3}`}></div>
        <div className={`${styles.star} ${styles.star4}`}></div>
        <div className={`${styles.star} ${styles.star5}`}></div>
        <div className={`${styles.star} ${styles.star6}`}></div>
        <div className={`${styles.star} ${styles.star7}`}></div>
        <div className={`${styles.star} ${styles.star8}`}></div>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.cardsContainer}>
          <div className={`${styles.glassCard} fade-in-up`} style={{animationDelay: '0.1s'}}>
            <h2>Vision</h2>
            <p>
              To be the leading student organization that nurtures future leaders who are committed to India's development and progress, combining traditional values with modern innovation. We envision a <span className={styles.highlight}>united India</span> where young minds drive positive change through leadership and innovation.
            </p>
          </div>

          <div className={`${styles.glassCard} fade-in-up`} style={{animationDelay: '0.3s'}}>
            <h2>Who We Are</h2>
            <p>
              Think India is a national student organization dedicated to fostering leadership, innovation, and social responsibility. Founded in 2006, we have grown into a <span className={styles.highlight}>pan-India movement</span> that empowers students to contribute meaningfully to nation-building through various initiatives and programs.
            </p>
          </div>

          <div className={`${styles.glassCard} fade-in-up`} style={{animationDelay: '0.5s'}}>
            <h2>Goals</h2>
            <p>
              Our primary goals include developing leadership skills, promoting social responsibility, and creating platforms for meaningful dialogue. We aim to <span className={styles.highlight}>connect students</span> with opportunities for growth, learning, and making a positive impact on society.
            </p>
          </div>
        </div>
        <Journey />
      </div>
    </section>
  );
};

export default AboutSection; 