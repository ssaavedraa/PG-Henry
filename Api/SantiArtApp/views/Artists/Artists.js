import { useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ArtistItem from "../../components/ArtistItem/ArtistItem";
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
    <FlatList 
    // refreshControl={
    //   <RefreshControl refreshing={loading} onRefresh={loadUsers} />
    // }
    data={artistData}
    renderItem={({item}) => (
      <ArtistItem artist={item} />
    )}
    keyExtractor={(item) => item.artistId}
    />
  );
}

export default Artists;
