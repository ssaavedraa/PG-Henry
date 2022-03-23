import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  Detail: {
    padding: wp("2%"),
    borderRadius: wp("2%"),
    elevation: 4,
    backgroundColor: "white",
    margin: wp("2%"),
    width: wp("90%"),
  },
  viewDetailsProducts: {
    width: wp("42.5%"),
  },
  imgItem: {
    marginTop: wp("2.5%"),
    marginBottom: wp("2.5%"),
    marginLeft: wp("2%"),
    width: wp("36%"),
    height: hp("16%"),
    resizeMode: "contain",
  },
  titlePainting: {
    fontStyle: "italic",
    fontWeight: "900",
    fontSize: hp("2.10%"),
    marginTop: wp("1%"),
    fontWeight: "bold",
  },
  textPrice: {
    fontSize: hp("2.75%"),
    marginTop: wp("1%"),
    fontWeight: "bold",
  },
  textDetails: {
    marginTop: wp("0.25%"),
    fontSize: hp("1.75%"),
  },
});
