import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Spinner from "../Spinner/Spinner";
import style from "./UserModal.style";
import banUser from "../../selectors/modifyUser/banUser";
import giveAdmin from "../../selectors/modifyUser/giveAdmin";
import passReset from "../../selectors/modifyUser/passReset";
import removeAdmin from "../../selectors/modifyUser/removeAdmin";
import unbanUser from "../../selectors/modifyUser/unbanUser";

function UserModal({ editModal, setEditModal, user, loadUsers }) {
  const [loading, setLoading] = useState(false);

  const submit = (operation) => {
    setLoading(true);
    operation(user.id)
      .then((_) => {
        Alert.alert("Success!", "", [{ text: "OK" }]);
        setEditModal(!editModal);
      })
      .catch((_) => {
        Alert.alert("Something went wrong :(", "", [{ text: "OK" }]);
        setEditModal(!editModal);
      })
      .finally((_) => {
        loadUsers();
      });
  };

  return (
    <View style={style.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={editModal}
        onRequestClose={() => setEditModal(!editModal)}
      >
        <View style={style.modalView}>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <Text>Que hacemo</Text>
              <View style={style.buttonContainer}>
                <Pressable
                  style={style.button}
                  onPress={() =>
                    submit(user.role === "admin" ? removeAdmin : giveAdmin)
                  }
                >
                  <Text>
                    {user.role === "admin" ? "Remove Admin" : "Give Admin"}
                  </Text>
                </Pressable>
                <Pressable
                  style={style.button}
                  onPress={() => submit(user.isBanned ? unbanUser : banUser)}
                >
                  <Text>{user.isBanned ? "Unban User" : "Ban User"}</Text>
                </Pressable>
                <Pressable
                  style={style.button}
                  onPress={() => submit(passReset)}
                >
                  <Text>Reset Password</Text>
                </Pressable>
              </View>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}

export default UserModal;
