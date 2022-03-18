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
        console.log("LOADED ARTISTS");
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
      {artistData.map(({ name }, i) => (
        <Text key={i}>{name}</Text>
      ))}
    </View>
  );
}

export default Artists;
/* <Image
          key={i}
          style={{ width: 50, height: 50 }}
          source={{
            uri: { photo },
          }}
        /> */
