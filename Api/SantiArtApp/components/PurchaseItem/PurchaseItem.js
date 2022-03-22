import ListItem from "../ListItem/ListItem";
import { Text, Button, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "./PurchaseItem.style";
import { useState } from "react";
import PurchaseModal from "../PurchaseModal/PurchaseModal";

const stateColors = {
  completed: "green",
  dispatched: "blue",
  processing: "#734488",
  pending: "#FFC600",
  canceled: "red",
};

function PurchaseItem({ purchase, navigation, loadPurchases }) {
  const [purchaseModal, setPurchaseModal] = useState(false);

  return (
    <>
      <PurchaseModal
        purchaseModal={purchaseModal}
        setPurchaseModal={setPurchaseModal}
        purchase={purchase}
        loadPurchases={loadPurchases}
      />
      <ListItem>
        <TouchableOpacity
          onPress={() => navigation.navigate("PurchaseDetail", { purchase })}
          onLongPress={() => setPurchaseModal(true)}
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
    </>
  );
}

export default PurchaseItem;
