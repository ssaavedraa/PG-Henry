import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: wp("5%"),
    height: hp("30%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    fontSize: hp("4%"),
    color: "black",
  },
  btnClose: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "flex-end",
    paddingTop: wp('3%'),
    paddingBottom: wp('3%'),
    width: wp("97%"),
  },
  viewChildren: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  }
});
