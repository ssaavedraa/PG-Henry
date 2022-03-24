import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    padding: wp("3%"),
  },
  viewStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: wp("1%"),
    margin: wp("0.5%"),
    borderBottomWidth: wp("0.5%"),
    borderColor: "#f5f5f5",
    alignContent: "center",
    alignItems: "center",
  },
  textPrincipal: {
    fontWeight: "bold",
    fontSize: hp("2.15%"),
    // textAlign: 'center' ,
  },
  viewPrice: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  totalPrice: {
    fontWeight: "bold",
    fontSize: hp("2.40%"),
  },
  total: {
    marginRight: wp("3.5%"),
    fontSize: hp("2%"),
  },
  containerStatusDetail: {
    width: wp("95%"),
    height: hp("40%"),
    justifyContent: "space-between",
  },
  viewDetailsProducts: {
    width: wp("42.5%"),
  },
  imgItem: {
    marginTop: wp("2.5%"),
    marginBottom: wp("2.5%"),
    marginLeft: wp("2%"),
    width: wp("36%"),
    height: hp("14%"),
    resizeMode: "contain",
  },
  customerInfo: {
    padding: wp("2%"),
    borderRadius: wp("2%"),
    elevation: 4,
    backgroundColor: "white",
    margin: wp("2%"),
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
