import axios from "axios";

const getArtistsDetail = async (id) => {
  try {
    const { data } = await axios.get(`/artist/get/${id}`);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default getArtistsDetail;
