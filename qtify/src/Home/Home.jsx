import { React } from "react";
import { fetchTopSongs } from "../components/api/api";
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

      <Section albumType={"Top Albums"} dataSource={fetchTopSongs} />
    </div>
  );
}

export default Home;
