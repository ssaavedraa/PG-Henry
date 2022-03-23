import { Text, View, Image, ScrollView } from "react-native";
import PaintingCard from "../../components/PaintingCard/PaintingCard";
import style from "./PurchaseDetail.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const stateColors = {
  completed: "green",
  dispatched: "blue",
  processing: "#734488",
  pending: "#FFC600",
  canceled: "red",
};

function PurchaseDetail({ route, navigation }) {
  const { purchase } = route.params;
  return (
    <View style={style.container}>
      <View style={style.customerInfo}>
        <Text style={style.textPrincipal}>Purchase status</Text>
        <Text
          style={{
            color: stateColors.hasOwnProperty(purchase.state)
              ? stateColors[purchase.state]
              : "grey",
            fontSize: wp("5%"),
          }}
        >
          {purchase.state}
        </Text>
        <Text>${purchase.totalPrice}</Text>
      </View>
      <View style={style.customerInfo}>
        <Text style={style.textPrincipal}>Customer's information</Text>
        <Text>
          {purchase.contactInfo.firstName} {purchase.contactInfo.lastName}
        </Text>
        <Text>{purchase.contactInfo.email}</Text>
        <Text>{purchase.contactInfo.telephone}</Text>
        <Text>{purchase.contactInfo.city}</Text>
      </View>
      <ScrollView>
        {purchase.paintings.map((painting, i) => (
          <PaintingCard key={i} painting={painting} />
        ))}
      </ScrollView>
    </View>
  );
}

export default PurchaseDetail;
