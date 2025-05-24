import React from 'react';
import styles from '../styles/Timeline.module.css';

const topRow = [
  {
    year: '2006',
    content: (
      <>
        <b>Inception:</b> Think India was founded in Bengaluru, Karnataka.<br />
        First City-Level Workshop organized.
      </>
    ),
  },
  {
    year: '2007',
    content: <>First Conference: Held at Swami Vivekananda Yoga University, Bengaluru.</>,
  },
  {
    year: '2010',
    content: <>First National Team Announcement.</>,
  },
  {
    year: '2011',
    content: <>First National Workshop: Titled India Today and Tomorrow.</>,
  },
  {
    year: '2012',
    content: <>First Law Summit: Law – Fulcrum of Change.</>,
  },
];

const bottomRow = [
  {
    year: '2020 onwards',
    content: (
      <>
        <b>Expansion of Internship Centers:</b> 10 prominent cities including Delhi, Lucknow, Kolkata, Ranchi, Ahmedabad, Hyderabad, Bengaluru, Mumbai, and Chandigarh.<br />
        <b>Support for International Internships:</b> Scholarships provided to selected students for Geneva & New York-based internships.
      </>
    ),
  },
  {
    year: '2019',
    content: <>Launch of Additional Internships</>,
  },
  {
    year: '2017',
    content: (
      <>
        Launch of Learning Platforms/Internships<br />
        Think India Fellowship.
      </>
    ),
  },
  {
    year: '2016',
    content: <>Second Law Summit organized.</>,
  },
  {
    year: '2013–2015',
    content: <>Think India expanded to more institutions and cities.</>,
  },
];

export default function Timeline() {
  return (
    <div className={styles.timelineModernWrapper}>
      {/* Top Row */}
      <div className={styles.timelineModernRow}>
        {topRow.map((event, idx) => (
          <React.Fragment key={event.year}>
            <div className={styles.timelineModernCard}>
              <div className={styles.timelineModernYear}>{event.year}</div>
              <div className={styles.timelineModernContent}>{event.content}</div>
            </div>
            {/* Horizontal connector except after last card */}
            {idx < topRow.length - 1 && (
              <div className={styles.timelineModernConnectorHorizontal} />
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Vertical connector from last top card to last bottom card */}
      <div className={styles.timelineModernVerticalConnector} />
      {/* Bottom Row */}
      <div className={styles.timelineModernRow}>
        {bottomRow.map((event, idx) => (
          <React.Fragment key={event.year}>
            <div className={styles.timelineModernCard}>
              <div className={styles.timelineModernYear}>{event.year}</div>
              <div className={styles.timelineModernContent}>{event.content}</div>
            </div>
            {/* Horizontal connector except after last card */}
            {idx < bottomRow.length - 1 && (
              <div className={styles.timelineModernConnectorHorizontal} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
} 