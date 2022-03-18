import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";
import getArtists from "../../selectors/getArtists";

function Artists() {
  const [artistData, setArtistData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getArtists()
      .then((artists) => {
        setArtistData(artists);
        //console.log("LOADED ARTISTS", artists);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <ActivityIndicator
        style={{
          flex: 1,
          justifyContent: "center",
        }}
        size="large"
        color="#0000ff"
      />
    );
  return (
    <View>
      {artistData.map(({ name, photo }, i) => (
        <View key={i}>
        <Text >{name}</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: photo,
          }}
        /> 
        </View>
      ))}
    </View>
  );
}

export default Artists;

