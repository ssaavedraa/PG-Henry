import style from "./PaintingCard.style";
import { View, Text, Image } from "react-native";

function PaintingCard({ painting }) {
  return (
    <View style={style.container}>
      <View style={style.viewImg}>
        <Image
          source={{
            uri: painting.photos[0].url,
          }}
          style={style.imgItem}
        />
      </View>
      <View style={style.viewDetailsProducts}>
        <View style={{ flexDirection: "column" }}>
          <Text style={style.titlePainting}>{painting.title}</Text>
          <Text style={style.textDetails}>
            {painting.height} x {painting.width}, {painting.orientation}
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={style.textPrice}>$ {painting.price}</Text>
        </View>
      </View>
    </View>
  );
}

export default PaintingCard;
