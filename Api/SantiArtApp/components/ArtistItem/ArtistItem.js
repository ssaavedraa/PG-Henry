import { View, Text, Image } from "react-native";
import style from "./ArtistItem.style";
import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import Icon from "react-native-vector-icons/Ionicons";

const ArtistItem = ({ artist }) => {
  const navigation = useNavigation();

  return (
    <>
      <ListItem>
        <TouchableOpacity
          onPress={() => navigation.navigate("ArtistDetail", { artist })}
        >
          <View style={style.containerArtist}>
            <View style={style.containerImg}>
              <Image source={{ uri: artist.photo }} style={style.img} />
            </View>
            <View style={style.container}>
              <View style={style.nameArtist}>
                <Text style={style.textName}>{artist.name}</Text>
                <View style={style.viewScore}>
                <Icon name="star" size={15} color={'#F9B208'}/>
                  <Text style={style.textScore}>{artist.score}</Text>
                </View>
              </View>
              <Text>{artist.email}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ListItem>
    </>
  );
};

export default ArtistItem;
