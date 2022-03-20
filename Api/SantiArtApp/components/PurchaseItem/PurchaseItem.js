import ListItem from "../ListItem/ListItem";
import { Text, Button } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { TouchableHighlight } from "react-native-gesture-handler";
import style from "./PurchaseItem.style";

function PurchaseItem({ purchase, navigation }) {
  return (
    <ListItem>
      <Text>{purchase.state}</Text>
      <Text>{purchase.totalPrice}</Text>
      <TouchableHighlight
        style={style.detailBtn}
        onPress={() => navigation.navigate("PurchaseDetail", { purchase })}
      >
        <MaterialCommunityIcons style={{ fontSize: 32 }} name="list-outline" />
      </TouchableHighlight>
    </ListItem>
  );
}

export default PurchaseItem;
