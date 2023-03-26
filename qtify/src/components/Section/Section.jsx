import { React, useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";
import styles from "./Section.module.css";


export default function Section({ albumType, dataSource, appreciateThrough ,filterSource }) {
  const [cards, setcards] = useState([]);
  //  console.log("data from section", cards);
  const [isCollapse, setisCollapse] = useState(false);

  const [filters, setFilters] = useState([{key: "all", label: "All"}]);

  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0)

  const handleCollapse = () => {
    setisCollapse(!isCollapse);
  };

  useEffect(() => {
    dataSource().then((data) => {
      // console.log("datasoure section", data);
      setcards(data);

      if(filterSource){
        filterSource().then((response)=> {
          const { data } = response
          setFilters([...filters,...data])
        })
      }
    });
  }, []);

  // console.log(filters,"from filters")

  const filteredCards = cards.filter((card) => 
  selectedFilterIndex !== 0
    ? card.genre.key === filters[selectedFilterIndex].key
    : card
  );

  return (
    <div className={styles.parentAlbum}>
      <div className={styles.albumHeader}>
        <strong>
          <p>{albumType}</p>
        </strong>

      { !filterSource  ? <strong>
          <p className={styles.collap} onClick={handleCollapse}>
            {isCollapse ? "Collapse" : "Show All"}
          </p>
        </strong> : null  }
      </div>

      {filterSource && 
      <Filters
       data={filters} 
        selectedFilterIndex={selectedFilterIndex}
       setSelectedFilterIndex= {setSelectedFilterIndex}
       />
       }

      {isCollapse ? (
       <div className={styles.line}>
        <div className={styles.albumcarousel}>
          {cards?.map((item) => {
            return (
              <Card
                data={item}
                key={item.id}
                appreciateThrough={appreciateThrough}
                // cardImage={item.image}
                // followers={item.follows + " Follows"}
                // title={item.title}
              />
            );
          })}
        </div>

        {/* <div className={styles.horizontalLine}></div> */}

       </div>
        
      ) : (
        <div className={styles.carousel}>
          <Carousel
            data={filteredCards}
            componentToRender={(cards) => (
              <Card
                data={cards}
                appreciateThrough={appreciateThrough}
              />
            )}
          />
        </div>
      )}
    </div>
  );
}
