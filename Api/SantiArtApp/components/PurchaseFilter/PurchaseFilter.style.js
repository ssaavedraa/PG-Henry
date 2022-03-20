import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("8%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterSelected: {
    backgroundColor: "#878787",
  },
  filter: {
    backgroundColor: "#ffffff",
  },
});
