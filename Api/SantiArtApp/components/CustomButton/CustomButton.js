import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import style from "./CustomButtom.style";

const defaultColor = "blue";
const defaultTextColor = "white";

export default function CustomButton({ text, color, onPress, textColor }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.base, { backgroundColor: color || defaultColor }]}
    >
      <Text style={[style.textBtn, { color: textColor || defaultTextColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
