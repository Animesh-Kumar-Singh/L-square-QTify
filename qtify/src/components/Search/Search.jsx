import React from "react";
import styles from "./Search.module.css";

function Search({ placeholder }) {
  return (
    <div className={styles.wrapper}>
      <input className={styles.search} placeholder={placeholder} />
      <button className={styles.searchButton}>
        <img src={require("../../assets/search-icon.png")} alt="search-icon" />
      </button>
    </div>
  );
}

export default Search;
