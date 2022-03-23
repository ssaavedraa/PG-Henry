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
      justifyContent: "center",
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
  
})