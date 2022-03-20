import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Spinner from "../../components/Spinner/Spinner";
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

  if (loading) return <Spinner />;

  return (
    <View>
      {artistData.map(({ name }, i) => (
        <Text key={i}>{name}</Text>
      ))}
    </View>
  );
}

export default Artists;
