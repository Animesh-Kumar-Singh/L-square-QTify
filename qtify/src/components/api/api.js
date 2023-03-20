// https://qtify-backend-labs.crio.do/albums/top
//https://qtify-backend-labs.crio.do/albums/new
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
