import ListItem from "../ListItem/ListItem";
import { Text, Button, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "./PurchaseItem.style";

const stateColors = {
  completed: "green",
  dispatched: "blue",
  processing: "#734488",
  pending: "#FFC600",
  canceled: "red",
};

function PurchaseItem({ purchase, navigation }) {
  return (
    <ListItem>
      <TouchableOpacity
        onPress={() => navigation.navigate("PurchaseDetail", { purchase })}
      >
        <View style={style.containerPurchase}>
          <View>
            <Text style={style.textName}>
              {purchase.contactInfo.firstName} {purchase.contactInfo.lastName}
            </Text>
            <Text
              style={[
                style.textPurchase,
                {
                  color: stateColors.hasOwnProperty(purchase.state)
                    ? stateColors[purchase.state]
                    : "grey",
                },
              ]}
            >
              {purchase.state}
            </Text>
          </View>
          <Text style={style.textName}>$ {purchase.totalPrice}</Text>
        </View>
      </TouchableOpacity>
    </ListItem>
  );
}

export default PurchaseItem;
