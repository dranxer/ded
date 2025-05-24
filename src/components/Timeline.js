import React from "react";
import styles from "../styles/Timeline.module.css";

const timelineData = [
  { year: "2006", events: ["Inception: Think India was founded in Bengaluru, Karnataka.", "First City-Level Workshop organized."] },
  { year: "2007", events: ["First Conference: Held at Swami Vivekananda Yoga University, Bengaluru."] },
  { year: "2010", events: ["First National Team Announcement."] },
  { year: "2011", events: ["First National Workshop: Titled India Today and Tomorrow."] },
  { year: "2012", events: ["First Law Summit: Law – Fulcrum of Change."] },
  { year: "2013–2015", events: ["Think India expanded to more institutions and cities."] },
  { year: "2016", events: ["Second Law Summit organized."] },
  { year: "2017", events: ["Launch of Learning Platforms/Internships", "Think India Fellowship."] },
  { year: "2019", events: ["Launch of Additional Internships"] },
  { year: "2020 onwards", events: [
    "Expansion of Internship Centers: 10 prominent cities including Delhi, Lucknow, Kolkata, Ranchi, Ahmedabad, Hyderabad, Bengaluru, Mumbai, and Chandigarh.",
    "Support for International Internships: Scholarships provided to selected students for Geneva & New York-based internships."
  ] }
];

// Split into two rows
const topRow = timelineData.filter((_, i) => i % 2 === 0);
const bottomRow = timelineData.filter((_, i) => i % 2 !== 0).reverse();

export default function Timeline() {
  return (
    <div className={styles.horizontalSnakeWrapper}>
      <div className={styles.horizontalSnakeRows}>
        <div className={styles.horizontalSnakeRow}>
          {topRow.map((item, i) => (
            <div className={styles.horizontalSnakeCardWrapper} key={item.year}>
              <div className={styles.horizontalSnakeCard}>
                <div className={styles.horizontalSnakeYear}>{item.year}</div>
                <ul className={styles.horizontalSnakeEvents}>
                  {item.events.map((event, j) => (
                    <li key={j}>{event}</li>
                  ))}
                </ul>
              </div>
              {i < topRow.length - 1 && (
                <div className={styles.horizontalSnakeConnector}></div>
              )}
              {bottomRow[i] && (
                <div className={styles.horizontalSnakeVerticalConnector}></div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.horizontalSnakeRow}>
          {bottomRow.map((item, i) => (
            <div className={styles.horizontalSnakeCardWrapper} key={item.year}>
              <div className={styles.horizontalSnakeVerticalConnectorUp}></div>
              <div className={styles.horizontalSnakeCard}>
                <div className={styles.horizontalSnakeYear}>{item.year}</div>
                <ul className={styles.horizontalSnakeEvents}>
                  {item.events.map((event, j) => (
                    <li key={j}>{event}</li>
                  ))}
                </ul>
              </div>
              {i < bottomRow.length - 1 && (
                <div className={styles.horizontalSnakeConnector}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 