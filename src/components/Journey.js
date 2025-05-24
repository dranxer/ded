import React from 'react';
import styles from '../styles/Journey.module.css';

const journeyData = [
  {
    year: '2006',
    title: 'The Beginning',
    description: 'Think India was founded in Bengaluru, Karnataka, marking the start of a transformative journey.',
    icon: '🚀'
  },
  {
    year: '2007-2011',
    title: 'Early Growth',
    description: 'First Conference at Swami Vivekananda Yoga University and establishment of the National Team.',
    icon: '🌱'
  },
  {
    year: '2012-2015',
    title: 'Expanding Horizons',
    description: 'First Law Summit and expansion to more institutions and cities across India.',
    icon: '🌍'
  },
  {
    year: '2016-2019',
    title: 'Innovation & Impact',
    description: 'Launch of Learning Platforms, Internships, and the Think India Fellowship program.',
    icon: '💡'
  },
  {
    year: '2020+',
    title: 'Global Reach',
    description: 'Expansion to 10 major cities and support for international internships in Geneva & New York.',
    icon: '🌟'
  }
];

export default function Journey() {
  return (
    <div className={styles.journeyContainer}>
      <h2 className={styles.journeyTitle}>Our Journey</h2>
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineLine}></div>
        <div className={styles.timelineContent}>
          {journeyData.map((milestone, index) => (
            <div 
              key={milestone.year} 
              className={styles.milestone}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.milestoneDot}></div>
              <div className={styles.milestoneContent}>
                <div className={styles.milestoneHeader}>
                  <div className={styles.milestoneIcon}>{milestone.icon}</div>
                  <div className={styles.milestoneYear}>{milestone.year}</div>
                </div>
                <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
                <p className={styles.milestoneDescription}>{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 