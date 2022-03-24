import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderBottomWidth: wp("0.5%"),
    borderColor: "#f5f5f5",
  },
  viewImg: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  viewDetailsProducts: {
    width: wp("60%"),
    marginHorizontal: wp("4%"),
    marginVertical: wp("0.75%"),
    justifyContent: "space-between",
    height: hp("13.5%"),
  },
  imgItem: {
    marginTop: wp("2.5%"),
    marginBottom: wp("2.5%"),
    marginLeft: wp("2%"),
    width: wp("23%"),
    height: hp("12%"),
    // resizeMode: 'contain'
  },
  titlePainting: {
    fontStyle: "italic",
    fontWeight: "900",
    fontSize: hp("2.10%"),
    marginTop: wp("1%"),
    fontWeight: "bold",
  },
  textPrice: {
    fontSize: hp("2.15%"),
    fontWeight: "bold",
  },
  textDetails: {
    marginTop: wp("0.25%"),
    fontSize: hp("1.75%"),
  },
});
