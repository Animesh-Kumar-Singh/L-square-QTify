import React from "react";
import styles from "./Card.module.css";

function Card({ data, type }) {
  const { id, title, follows, image, likes } = data;

  return (
    <div className={styles.card}>
      <div className={styles.imageFollow}>
        <img
          src={image}
          alt="cardImage"
          loading="lazy"
          object-fit="contain"
          height={170}
          width={159}
        />

        <span className={styles.follow}>
          <p className={styles.textSize}>
            {type == "follows" ? follows : likes}
          </p>
        </span>
      </div>

      <p>{title}</p>
    </div>
  );
}

export default Card;
