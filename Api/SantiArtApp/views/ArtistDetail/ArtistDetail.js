import { View, Text, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import StatsArtistItem from "../../components/StatsArtistItem/StatsArtistItem";
import style from "./ArtistDetail.style";
import getArtistsDetail from "../../selectors/getArtistDetail";
import Spinner from "../../components/Spinner/Spinner";
import Icon from "react-native-vector-icons/Ionicons";

export default function ArtistDetail({ route, navigation }) {
  const { artist } = route.params;

  const [detailArtist, setDetailArtist] = useState({});
  const [loading, setLoading] = useState(false);

  const loadArtists = (id) => {
    setLoading(true);
    getArtistsDetail(id)
      .then((artist) => {
        setDetailArtist(artist);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadArtists(artist.artistId);
  }, []);

  if (loading) return <Spinner />;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={style.container}>
        <View style={style.viewImg}>
          <Image source={{ uri: detailArtist.photo }} style={style.img} />
          <Text style={style.textName}>{detailArtist.name}</Text>
        </View>
        <View style={style.viewEmail}>
          <View style={style.textIcon}>
          <Icon name="mail-outline" size={25} color={'#7c7c7c'}/>
            <Text style={style.text}>{detailArtist.email}</Text>
          </View>
          <View style={style.textIcon}>
          <Icon name="location-outline" size={25} color={'#7c7c7c'}/>
            <Text style={style.text}>{detailArtist.location}</Text>
          </View>
        </View>
        <Text style={style.textBiography}>{detailArtist.biography}</Text>
        <View style={style.containerStats}>
          <StatsArtistItem title={"Reviews"} value={artist.reviews} />
          <StatsArtistItem title={"Sales"} value={artist.sales} />
          <StatsArtistItem title={"Paintings"} value={artist.paintings} />
        </View>
      </View>
    </ScrollView>
  );
}
