import { React, useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import Album from "../components/Album/Album";

function Home() {
  const [cards, setCards] = useState(null);

  let URL = "https://qtify-backend-gye4ebhsbpfea8g9.z01.azurefd.net/albums/top";

  const getDataFromCardApi = async (url) => {
    let data = await axios.get(url);

    // console.log("data", data.data);
    setCards(data.data);
  };

  useEffect(() => {
    getDataFromCardApi(URL);
  }, [URL]);

  console.log("cards", cards);

  return (
    <div>
      <Navbar />
      <HeroSection
        text1="100 Thousand Songs, ad-free"
        text2="Over thousands podcast episodes"
      />
      <Album albumData={cards} albumType={"Top Albums"} />
    </div>
  );
}

export default Home;
