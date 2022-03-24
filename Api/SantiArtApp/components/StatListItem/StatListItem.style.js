import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    width: wp("92%"),
    backgroundColor: "white",
    borderRadius: wp("2%"),
    marginBottom: wp("2%"),
    marginTop: wp("2%"),
    marginLeft: wp("4%"),
    flexDirection: "column",
    alignItems: "center",
    padding: wp("2.5%"),
    elevation: 4
  },
});
