import { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Spinner from "../Spinner/Spinner";
import style from "./UserModal.style";
import banUser from "../../selectors/modifyUser/banUser";
import giveAdmin from "../../selectors/modifyUser/giveAdmin";
import passReset from "../../selectors/modifyUser/passReset";
import removeAdmin from "../../selectors/modifyUser/removeAdmin";
import unbanUser from "../../selectors/modifyUser/unbanUser";
import CustomModal from "../CustomModal/CustomModal";
import CustomButton from "../CustomButton/CustomButton";

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
    <CustomModal
      openModal={editModal}
      closeModal={() => {
        setEditModal(false);
      }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Text style={style.textWant}>What do you want to do?</Text>
          <View style={style.buttonContainer}>
            <CustomButton
              onPress={() =>
                submit(user.role === "admin" ? removeAdmin : giveAdmin)
              }
              text={user.role === "admin" ? "Remove admin" : "Give admin"}
            />
            <CustomButton
              onPress={() => submit(user.isBanned ? unbanUser : banUser)}
              text={user.isBanned ? "Unban user" : "Ban user"}
            />
            <CustomButton
              onPress={() => submit(passReset)}
              text={"Reset password"}
            />
          </View>
        </>
      )}
    </CustomModal>
  );
}

export default UserModal;
