import { Text, View } from "react-native";
import style from "./PurchaseFilter.style";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const states = [
  {
    name: "Processing",
    icon: "ellipsis-horizontal-outline",
  },
  { name: "Pending", icon: "time-outline" },
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
    <View style={style.containerContainer}>
      <Text style={style.textFilter}>Filter purchases</Text>
      <View style={style.container}>
        {states.map(({ name, icon }, id) => {
          return (
            <View
              key={id}
              style={filter === name ? style.filter : style.selected}
            >
              <TouchableWithoutFeedback onPress={() => handlePress(id)}>
                <View style={style.iconText}>
                  <MaterialCommunityIcons
                    name={icon}
                    style={filter === name ? style.iconsSelected : style.icons}
                  />
                  <Text
                    style={
                      filter === name
                        ? style.textNameFilterSelected
                        : style.textNameFilter
                    }
                  >
                    {name}
                  </Text>
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
