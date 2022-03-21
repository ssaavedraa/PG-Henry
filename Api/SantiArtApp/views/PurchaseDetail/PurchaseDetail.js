import { Text, View, Image } from "react-native";
import style from "./PurchaseDetail.style";

function PurchaseDetail({ route, navigation }) {
  const { purchase } = route.params;
  // console.log(route.params);
  return (
    <View style={style.container}>
      <View style={style.customerInfo}>
        <Text style={style.textPrincipal}>Purchase status</Text>
        <Text>{purchase.state}</Text>
        <Text>{purchase.totalPrice}</Text>
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
      <View style={style.containerStatusDetail}>
        <View style={style.Detail}>
          <Text style={style.textPrincipal}>Item detail</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: 'space-between',
              alignItems: "flex-start",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={{
                  uri: purchase.paintings[0].photos[0].url,
                }}
                style={style.imgItem}
              />
            </View>
            <View style={style.viewDetailsProducts}>
              <Text style={style.titlePainting}>
                {purchase.paintings[0].title}
              </Text>
              <Text style={style.textDetails}>
                {purchase.paintings[0].height} x {purchase.paintings[0].width}
              </Text>
              <Text style={style.textDetails}>
                {purchase.paintings[0].orientation}
              </Text>
              <Text style={style.textPrice}>
                $ {purchase.paintings[0].price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default PurchaseDetail;
