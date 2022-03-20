import { Text, View } from "react-native";
import style from "./PurchaseFilter.style";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const states = [
  {
    name: "Processing",
    icon: "ellipsis-horizontal-outline",
    color: "blue",
  },
  { name: "Pending", icon: "close-outline", color: "blue" },
  { name: "Dispatched", icon: "checkmark-outline", color: "blue" },
  { name: "Completed", icon: "checkmark-done-outline", color: "blue" },
  { name: "Canceled", icon: "close-outline", color: "blue" },
];

function PurchaseFilter({ setFilter, filter }) {
  const handlePress = (id) => {
    setFilter((p) => {
      const { name } = states[id];
      return p === name ? "" : name;
    });
  };
  return (
    <View style={style.containerContainer}>
      <Text style={style.textFilter}>Filter purchases</Text>
      <View style={style.container}>
        {states.map(({ name, icon, color }, id) => {
          return (
            <View
              key={id}
              style={filter === name ? style.filterSelected : style.filter}
            >
              <TouchableWithoutFeedback onPress={() => handlePress(id)}>
                <View style={style.iconText}>
                  <MaterialCommunityIcons
                    name={icon}
                    color={color}
                    style={style.icons}
                  />
                  <Text style={style.textNameFilter}>{name}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default PurchaseFilter;
