import { Text, View } from "react-native";
import style from "./PurchaseDetail.style";

function PurchaseDetail({ route, navigation }) {
  const { purchase } = route.params;
  console.log(route.params);
  return (
    <View style={style.container}>
      <View>
        <Text>Customer's information</Text>
        <Text>
          {purchase.contactInfo.firstName} {purchase.contactInfo.lastName}
        </Text>
        <Text>{purchase.contactInfo.email}</Text>
        <Text>{purchase.contactInfo.telephone}</Text>
        <Text>{purchase.contactInfo.city}</Text>
      </View>
      <View style={style.containerStatusDetail}>
        <View>
          <Text>Purchase status</Text>
          <Text>{purchase.state}</Text>
          <Text>{purchase.totalPrice}</Text>
        </View>
        <View>
          <Text>Item detail</Text>
          <Text>{purchase.paintings[0].title}</Text>
        </View>
      </View>
    </View>
  );
}

export default PurchaseDetail;
