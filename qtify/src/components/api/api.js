// https://qtify-backend-labs.crio.do/albums/top
//https://qtify-backend-labs.crio.do/albums/new
//https://qtify-backend-labs.crio.do/genres
//https://qtify-backend-labs.crio.do/songs
import axios from "axios";

const BACKEND_URL = "https://qtify-backend-labs.crio.do";

export const fetchTopSongs = async () => {
  try {
    let res = await axios.get(`${BACKEND_URL}/albums/top`);
    // console.log("from api data", res.data);
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchNewAlbums = async () => {
  try{
    let res = await axios.get(`${BACKEND_URL}/albums/new`);
    return res.data
  }catch (error){
    console.log("error from api new Albums",error)
  }
}

export const fetchFilters = async () => {
  try{
    let res = await axios.get(`${BACKEND_URL}/genres`);
    return res.data
  }catch (error){
    console.log("error from api genres",error)
  }
}

export const fetchSongs = async () => {
  try{
    let res = await axios.get(`${BACKEND_URL}/songs`);
    // console.log(res.data,"res from songsss")
    return res.data
  }catch (error){
    console.log("error from api songs",error)
  }
}