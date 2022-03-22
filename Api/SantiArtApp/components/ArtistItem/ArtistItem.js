import { View, Text, Image } from "react-native";
import style from "./ArtistItem.style";
import React from "react";
import ListItem from "../ListItem/ListItem";

const ArtistItem = ({ artist }) => {
  return (
    <>
      <ListItem>
        <View style={style.containerImg}>
          <Image source={{ uri: artist.photo }} style={style.img} />
        </View>
        <View style={style.container}>
          <View style={style.nameArtist}>
            <Text>{artist.name}</Text>
            <Text>{artist.score}</Text>
          </View>
          <View style={style.detailArtist}>
            <Text>{"Paintings " + artist.paintings}</Text>
            <Text>{"Reviews " + artist.reviews}</Text>
            <Text>{"Sales " + artist.sales}</Text>
          </View>
        </View>
      </ListItem>
    </>
  );
};

export default ArtistItem;
