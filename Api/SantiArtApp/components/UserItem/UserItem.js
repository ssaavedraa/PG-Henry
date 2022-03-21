import { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListItem from "../ListItem/ListItem";
import UserModal from "../UserModal/UserModal";
import style from "./UserItem.style";

function UserItem({ user, loadUsers }) {
  const [editModal, setEditModal] = useState(false);
  return (
    <>
      <UserModal
        editModal={editModal}
        setEditModal={setEditModal}
        user={user}
        loadUsers={loadUsers}
      />
      <ListItem>
        <View style={{ width: "100%", height: "100%" }}>
          <TouchableOpacity
            style={{ flexDirection: "column", justifyContent: "space-between" }}
            onLongPress={() => setEditModal(true)}
          >
            <Text>{user.email}</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>{user.isBanned ? "Banneado" : "No Banneado"}</Text>
              <Text>{"Role: " + user.role}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ListItem>
    </>
  );
}

export default UserItem;
