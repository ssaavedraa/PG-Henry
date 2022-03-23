import { Modal, Pressable, View, Text } from "react-native";
import React from "react";
import style from "./CustomModalCenter.style";

export default function CustomModalCenter({
  openModalCenter,
  closeModalCenter,
  msg,
  rechazo,
  acepta,
  onPress,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openModalCenter}
      onRequestClose={closeModalCenter}
    >
      <View style={style.overlay}>
        <View style={style.modalView}>
          <Text>{msg}</Text>
          <Pressable onPressIn={closeModalCenter}>
            <Text>{rechazo}</Text>
          </Pressable>
          <Pressable onPress={onPress} >
            <Text>{acepta}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
