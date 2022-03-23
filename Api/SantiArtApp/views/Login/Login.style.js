import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loginForm: {
    justifyContent: "center",
    padding: wp("5%"),
  },
  img: {
    width: wp("42%"),
    height: hp("15%"),
  },
  viewImage: {
    flex: 0.5,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
  viewInputs: {
    flexDirection: "row",
    width: wp("90%"),
    height: hp("7.5%"),
    borderColor: "#DCDCDD",
    borderWidth: wp("0.75%"),
    borderRadius: wp("2.5%"),
    marginTop: wp("4%"),
    
    paddingLeft: wp("2.5%"),
    alignItems: "center",
    backgroundColor: "white",
    elevation: 2,
  },
  textWelcome: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: hp("4%"),
    color: "#1696ad",
  },
  inputs: {
    fontSize: hp("1.9%"),
    width: wp('70%'),
    marginLeft: wp('2%')
  },
  btnLogin: {
    width: wp("90%"),
    height: hp("7.5%"),
    backgroundColor: "#1696ad",
    marginTop: wp("7%"),
    borderRadius: wp("2.5%"),
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  textLogin: {
    color: "white",
    fontSize: hp("2.5%"),
    textAlign: "center",
    fontWeight: "bold",
  },
});
