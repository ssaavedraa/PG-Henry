import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: wp("2%"),
    marginTop: hp("50%"),
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    width: wp("95%"),
    justifyContent: "space-between",
  },
  button: {
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
  textWant: {
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    paddingBottom: wp("4%"),
  },
});
