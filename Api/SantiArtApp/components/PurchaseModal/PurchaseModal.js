import { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import setCanceled from "../../selectors/modifyPurchase/setCanceled";
import setCompleted from "../../selectors/modifyPurchase/setCompleted";
import setDispatched from "../../selectors/modifyPurchase/setDispatched";
import Spinner from "../Spinner/Spinner";
import style from "./PurchaseModal.style";

function PurchaseModal({
  purchaseModal,
  setPurchaseModal,
  purchase,
  loadPurchases,
}) {
  const [loading, setLoading] = useState(false);

  const submit = (operation) => {
    setLoading(true);
    operation(purchase.id)
      .then((_) => {
        Alert.alert("Success!", "", [{ text: "OK" }]);
        setPurchaseModal(!purchaseModal);
      })
      .catch((_) => {
        Alert.alert("Something went wrong :(", "", [{ text: "OK" }]);
        setPurchaseModal(!purchaseModal);
      })
      .finally((_) => {
        loadPurchases();
      });
  };

  return (
    <View style={style.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={purchaseModal}
        onRequestClose={() => setPurchaseModal(!purchaseModal)}
      >
        <View style={style.modalView}>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <Text>Que hacemo</Text>
              {purchase.state === "processing" ||
              purchase.state === "completed" ||
              purchase.state === "canceled" ? (
                <Text>{`There's no operations for ${purchase.state} purchases`}</Text>
              ) : (
                <View style={style.buttonContainer}>
                  <Pressable
                    style={style.button}
                    onPress={() =>
                      submit(
                        purchase.state === "pending"
                          ? setDispatched
                          : setCompleted
                      )
                    }
                  >
                    <Text>
                      {purchase.state === "pending" ? "Dispatch" : "Complete"}
                    </Text>
                  </Pressable>
                  <Pressable
                    style={style.button}
                    onPress={() => submit(setCanceled)}
                  >
                    <Text>Cancel</Text>
                  </Pressable>
                </View>
              )}
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}

export default PurchaseModal;
