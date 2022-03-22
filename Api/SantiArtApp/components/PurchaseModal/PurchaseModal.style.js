import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  textWant: {
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    paddingBottom: wp("4%"),
  },
  buttonContainer: {
    flexDirection: "row",
    width: wp("95%"),
    justifyContent: 'space-evenly',
  },
});
