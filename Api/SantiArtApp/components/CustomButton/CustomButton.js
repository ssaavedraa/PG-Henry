import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import style from "./CustomButtom.style";

export default function CustomButton({ text, color, onPress, textColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={[style.base, {}]}>
      <Text style={[style.textBtn, {}]}>{text}</Text>
    </TouchableOpacity>
  );
}
