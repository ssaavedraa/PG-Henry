import { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
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
        <View style={style.container}>
          <TouchableOpacity
            style={style.btnList}
            onLongPress={() => setEditModal(true)}
          >
            <View style={style.viewRole}>
              <Text style={style.textEmail}>{user.email}</Text>
              {/* {user.isBanned ? <Text>Banneado</Text> : <Text></Text>} */}
              {user.isBanned ? (
                <FontAwesome5Icon name="user-slash" style={style.iconBanned} />
              ) : (
                <FontAwesome5Icon name="user-alt" style={style.iconNoBanned}/>
              )}
            </View>
            <View style={style.viewRole}>
              <Text style={style.textName}>
                {user.firstName} {user.lastName}
              </Text>
              <Text>{user.role}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ListItem>
    </>
  );
}

export default UserItem;
