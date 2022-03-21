import { useEffect, useState } from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ListItem from "../../components/ListItem/ListItem";
import Spinner from "../../components/Spinner/Spinner";
import UserItem from "../../components/UserItem/UserItem";
import getUsers from "../../selectors/getUsers";

function Users() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((users) => {
        if (isMounted) setUserData(users);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => setIsMounted(false);
  }, []);

  if (loading) return <Spinner />;
  return (
    <>
      <FlatList
        data={userData}
        renderItem={({ item }) => <UserItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

export default Users;
