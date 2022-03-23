import axios from "axios";

const getUsers = async () => {
  try {
    const { data } = await axios.get("/user/getall");
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default getUsers;
