import React from "react";
import Card from "../components/Card/Card";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection
        text1="100 Thousand Songs, ad-free"
        text2="Over thousands podcast episodes"
      />
      {/* <Card
        cardImage={require("../assets/cardImage1.png")}
        title={"New Bollwood"}
        followers={"100M Follows"}
      /> */}
    </div>
  );
}

export default Home;
