import { useEffect, useState } from "react";
import { Text, RefreshControl } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Spinner from "../../components/Spinner/Spinner";
import UserItem from "../../components/UserItem/UserItem";
import getUsers from "../../selectors/getUsers";

function Users() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const loadUsers = () => {
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
  };

  useEffect(() => {
    loadUsers();
    return () => setIsMounted(false);
  }, []);

  if (loading) return <Spinner />;
  return (
    <>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadUsers} />
        }
        data={userData}
        renderItem={({ item }) => (
          <UserItem user={item} loadUsers={loadUsers} />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

export default Users;
