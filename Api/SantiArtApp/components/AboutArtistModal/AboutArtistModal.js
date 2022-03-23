import { View, Text } from "react-native";
import React from "react";
import CustomModal from "../CustomModal/CustomModal";
import style from "./AboutArtistModal.style";
import StatsArtistItem from "../StatsArtistItem/StatsArtistItem";

export default function AboutArtistModal({
  artistData,
  setArtistData,
  artist,
}) {
  return (
    <CustomModal
      openModal={artistData}
      closeModal={() => {
        setArtistData(false);
      }}
    >
      <View style={style.detailArtist}>
        <Text style={style.statsArtist}>Stats artist</Text>
        <View style={style.containerDetail}>
          <StatsArtistItem title={"Reviews"} value={artist.reviews} />
          <StatsArtistItem title={"Sales"} value={artist.sales} />
          <StatsArtistItem title={"Paintings"} value={artist.paintings} />
        </View>
      </View>
    </CustomModal>
  );
}
