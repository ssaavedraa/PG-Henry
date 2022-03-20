import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("10%"),
    backgroundColor: "#f2fcff",
    marginTop: hp("1%"),
    marginBottom: hp("1%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
