import { Text, View } from "react-native";

function PurchaseDetail({ route, navigation }) {
  const { purchase } = route.params;
  console.log(route.params);
  return (
    <View>
      <Text>{purchase.state}</Text>
      <Text>{purchase.totalPrice}</Text>
      <Text>{purchase.contactInfo.firstName}</Text>
      <Text>{purchase.contactInfo.lastName}</Text>
      <Text>{purchase.contactInfo.city}</Text>
    </View>
  );
}

export default PurchaseDetail;
