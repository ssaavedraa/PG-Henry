import axios from "axios";

export async function addFav(id) {
  try {
    await axios.post(`http://localhost:3001/favorites/add/${id}`);
  } catch (e) {}
}

export async function deleteFav(id) {
  try {
    await axios.delete(`http://localhost:3001/favorites/remove/${id}`);
  } catch (e) {}
}
