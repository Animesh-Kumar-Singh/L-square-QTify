import React from "react";
import Card from "../Card/Card";
import styles from "./Album.module.css";

export default function Album({ albumData, albumType }) {
  console.log(albumData);
  return (
    <div className={styles.parentAlbum}>
      <div className={styles.albumHeader}>
        <strong>
          <p>{albumType}</p>
        </strong>

        <strong>
          <p className={styles.collap}>Collapse</p>
        </strong>
      </div>

      <div className={styles.albumcarousel}>
        {albumData?.map((item) => {
          return (
            <Card
              key={item.id}
              cardImage={item.image}
              followers={item.follows}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}
