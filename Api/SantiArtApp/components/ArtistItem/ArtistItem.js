import { View, Text, Image } from "react-native";
import style from "./ArtistItem.style";
import React, { useState } from "react";
import ListItem from "../ListItem/ListItem";
import AboutArtistModal from "../AboutArtistModal/AboutArtistModal";
import { TouchableOpacity } from "react-native-gesture-handler";

const ArtistItem = ({ artist }) => {
  const [artistData, setArtistData] = useState(false);
  return (
    <>
      <AboutArtistModal
        artistData={artistData}
        setArtistData={setArtistData}
        artist={artist}
      />
      <ListItem>
        <TouchableOpacity onPress={() => setArtistData(true)}>
          <View style={style.containerArtist}>
            <View style={style.containerImg}>
              <Image source={{ uri: artist.photo }} style={style.img} />
            </View>
            <View style={style.container}>
              <View style={style.nameArtist}>
                <Text style={style.textName}>{artist.name}</Text>
                <Text>{artist.email}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ListItem>
    </>
  );
};

export default ArtistItem;
