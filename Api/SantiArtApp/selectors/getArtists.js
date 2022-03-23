import axios from "axios";

const getArtists = async () => {
  try {
    const { data } = await axios.get("/artist/getstats");
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default getArtists;


