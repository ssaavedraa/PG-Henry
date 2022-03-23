import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  base: {
    borderRadius: wp("2%"),
    width: wp("30%"),
    height: hp("6%"),
    elevation: 2,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: "white",
    textAlign: "center",
    fontWeight: 'bold'
  },
});
