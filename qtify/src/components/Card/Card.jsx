import React from "react";
import styles from "./Card.module.css";
import Tooltip from '@mui/material/Tooltip';

function Card({ data, appreciateThrough  }) {

  
  const { id, title, follows, image, likes,songs } = data;

  if(appreciateThrough == "follows"){ 


  

  return (
  <Tooltip title={songs.length + " songs"} placement="top" arrow >
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
            {follows + " Follows"}
          </p>
        </span>
      </div>

      <p>{title}</p>
    </div>
    </Tooltip>
  );

  }else {
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
            {likes + " Likes"}
          </p>
        </span>
      </div>

      <p>{title}</p>
    </div>)
  }
}

export default Card;
