import ListItem from "../ListItem/ListItem";
import { Text, Button, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
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
        <TouchableOpacity
          onPress={() => navigation.navigate("PurchaseDetail", { purchase })}
        >
          <MaterialCommunityIcons
            style={{ fontSize: 30 }}
            name="ellipsis-vertical"
          />
        </TouchableOpacity>
      </View>
    </ListItem>
  );
}

export default PurchaseItem;
