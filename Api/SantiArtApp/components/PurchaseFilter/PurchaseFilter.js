import { Text, View } from "react-native";
import style from "./PurchaseFilter.style";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const states = [
  { name: "Processing", icon: "ellipsis-horizontal-outline" },
  { name: "Pending", icon: "close-outline" },
  { name: "Dispatched", icon: "checkmark-outline" },
  { name: "Completed", icon: "checkmark-done-outline" },
  { name: "Canceled", icon: "close-outline" },
];

function PurchaseFilter({ setFilter, filter }) {
  const handlePress = (id) => {
    setFilter((p) => {
      const { name } = states[id];
      return p === name ? "" : name;
    });
  };
  return (
    <View style={style.container}>
      {states.map(({ name, icon }, id) => {
        return (
          <View
            key={id}
            style={filter === name ? style.filterSelected : style.filter}
          >
            <TouchableWithoutFeedback onPress={() => handlePress(id)}>
              <View>
                <MaterialCommunityIcons name={icon} />
                <Text>{name}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </View>
  );
}

export default PurchaseFilter;
