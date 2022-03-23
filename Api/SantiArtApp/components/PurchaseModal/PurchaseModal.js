import { useState } from "react";
import { Alert, Modal, Text, Pressable, View } from "react-native";
import setCanceled from "../../selectors/modifyPurchase/setCanceled";
import setCompleted from "../../selectors/modifyPurchase/setCompleted";
import setDispatched from "../../selectors/modifyPurchase/setDispatched";
import CustomButton from "../CustomButton/CustomButton";
import CustomModal from "../CustomModal/CustomModal";
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
    <CustomModal
      openModal={purchaseModal}
      closeModal={() => {
        setPurchaseModal(false);
      }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {purchase.state === "processing" ||
          purchase.state === "completed" ||
          purchase.state === "canceled" ? (
            <Text style={style.textNo}>{`There's no operations for ${purchase.state} purchases`}</Text>
          ) : (
            <>
              <Text style={style.textWant}>What do you want to do?</Text>
              <View style={style.buttonContainer}>
                <CustomButton
                  onPress={() =>
                    submit(
                      purchase.state === "pending"
                        ? setDispatched
                        : setCompleted
                    )
                  }
                  text={purchase.state === "pending" ? "Dispatch" : "Complete"}
                  color={purchase.state === "pending" ? "#5499C7" : "#52BE80"}
                />
                <CustomButton
                  onPress={() => submit(setCanceled)}
                  text={"Cancel"}
                  color="#EC7063"
                />
              </View>
            </>
          )}
        </>
      )}
    </CustomModal>
  );
}

export default PurchaseModal;
