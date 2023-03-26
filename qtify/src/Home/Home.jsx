import { React } from "react";
import { fetchFilters, fetchNewAlbums, fetchSongs, fetchTopSongs } from "../components/api/api";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import Section from "../components/Section/Section";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <HeroSection
        text1="100 Thousand Songs, ad-free"
        text2="Over thousands podcast episodes"
      />

      <Section albumType={"Top Albums"} dataSource={fetchTopSongs} appreciateThrough={"follows"} />
      <div className={styles.divide}></div>
      <Section albumType={"New Albums"} dataSource={fetchNewAlbums} appreciateThrough={"follows"} />
      <div className={styles.divide}></div>
      <Section albumType={"Songs"} dataSource={fetchSongs} appreciateThrough={"likes"} filterSource={fetchFilters} />
      <div className={styles.divide}></div>
    </div>
  );
}

export default Home;
