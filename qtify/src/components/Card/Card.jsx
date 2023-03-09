import React from "react";
import styles from "./Card.module.css";

function Card({ cardImage, followers, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageFollow}>
        <img src={cardImage} alt="cardImage" />

        <span className={styles.follow}>
          <p className={styles.textSize}>{followers}</p>
        </span>
      </div>

      <p>{title}</p>
    </div>
  );
}

export default Card;
