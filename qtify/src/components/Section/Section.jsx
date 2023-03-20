import { React, useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

export default function Section({ albumType, dataSource }) {
  const [cards, setcards] = useState([]);
  // console.log("data from section", cards);
  const [isCollapse, setisCollapse] = useState(false);

  const handleCollapse = () => {
    setisCollapse(!isCollapse);
  };

  useEffect(() => {
    dataSource().then((data) => {
      // console.log("datasoure section", data);
      setcards(data);
    });
  }, []);

  return (
    <div className={styles.parentAlbum}>
      <div className={styles.albumHeader}>
        <strong>
          <p>{albumType}</p>
        </strong>

        <strong>
          <p className={styles.collap} onClick={handleCollapse}>
            {isCollapse ? "Collapse" : "Show All"}
          </p>
        </strong>
      </div>
      {isCollapse ? (
       <div className={styles.line}>
        <div className={styles.albumcarousel}>
          {cards?.map((item) => {
            return (
              <Card
                data={{
                  id: item.id,
                  title: item.title,
                  follows: item.follows + " Follows",
                  image: item.image,
                }}
                key={item.id}
                type={"follows"}
                // cardImage={item.image}
                // followers={item.follows + " Follows"}
                // title={item.title}
              />
            );
          })}
        </div>

        <div className={styles.horizontalLine}></div>

       </div>
        
      ) : (
        <div className={styles.carousel}>
          <Carousel
            data={cards}
            componentToRender={(cards) => (
              <Card
                data={{
                  title: cards.title,
                  image: cards.image,
                  follows: cards.follows + " Follows",
                }}
                type="follows"
              />
            )}
          />
        </div>
      )}
    </div>
  );
}
