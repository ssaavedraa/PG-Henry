import { Text, View, Image, ScrollView } from "react-native";
import PaintingCard from "../../components/PaintingCard/PaintingCard";
import style from "./PurchaseDetail.style";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomerInfo from "../../components/CustomerInfo/CustomerInfo";

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
    <ScrollView>
      <View style={style.container}>
        <View style={style.customerInfo}>
          <View style={style.viewStatus}>
            <Text style={style.textPrincipal}>Purchase</Text>
            <Text
              style={{
                color: stateColors.hasOwnProperty(purchase.state)
                  ? stateColors[purchase.state]
                  : "grey",
                fontSize: hp("2.25%"),
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {purchase.state}
            </Text>
          </View>
          <ScrollView>
            {purchase.paintings.map((painting, i) => (
              <PaintingCard key={i} painting={painting} />
            ))}
            <View style={style.viewPrice}>
              <Text style={style.total}>Total</Text>
              <Text style={style.totalPrice}>{"$ " + purchase.totalPrice}</Text>
            </View>
          </ScrollView>
        </View>
       <CustomerInfo purchase={purchase} />
      </View>
    </ScrollView>
  );
}

export default PurchaseDetail;
