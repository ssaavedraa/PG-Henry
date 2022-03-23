import style from "./PaintingCard.style";
import { View, Text, Image } from "react-native";

function PaintingCard({ painting }) {
  return (
    <View style={style.Detail}>
      {/* <Text style={style.textPrincipal}>Item detail</Text> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{
              uri: painting.photos[0].url,
            }}
            style={style.imgItem}
          />
        </View>
        <View style={style.viewDetailsProducts}>
          <Text style={style.titlePainting}>{painting.title}</Text>
          <Text style={style.textDetails}>
            {painting.height} x {painting.width}
          </Text>
          <Text style={style.textDetails}>{painting.orientation}</Text>
          <Text style={style.textPrice}>$ {painting.price}</Text>
        </View>
      </View>
    </View>
  );
}

export default PaintingCard;
