import { View, Text } from "react-native";
import React from "react";
import style from "./StatsArtistItem.style";

export default function StatsArtistItem({ title, value }) {
  return (
    <View style={style.container}>
      <Text style={style.value}>{value}</Text>
      <Text style={style.title}>{title}</Text>
    </View>
  );
}
