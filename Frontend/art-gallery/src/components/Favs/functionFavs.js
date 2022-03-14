import axios from "axios";

export async function addFav(id) {
  try {
    await axios.post(`/favorites/add/${id}`);
  } catch (e) {}
}

export async function deleteFav(id) {
  try {
    await axios.delete(`/favorites/remove/${id}`);
  } catch (e) {}
}
