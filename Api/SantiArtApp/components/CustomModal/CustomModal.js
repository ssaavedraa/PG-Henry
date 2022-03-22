import { Modal, Pressable, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import style from "./CustomModal.style.js";

export default function CustomModal({ openModal, closeModal, children }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openModal}
      onRequestClose={closeModal}
    >
      <View style={style.overlay}>
        <View style={style.modalView}>
          <Pressable onPress={closeModal} style={style.btnClose}>
            <MaterialCommunityIcons
              name="ios-close-circle-outline"
              style={style.icon}
            />
          </Pressable>
          <View style={style.viewChildren}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}
