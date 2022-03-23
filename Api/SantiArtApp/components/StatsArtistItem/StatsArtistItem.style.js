import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: wp("21%"),
    height: hp("13%"),
    borderRadius: wp("2.5%"),
    elevation: 2,
    borderColor: "#f5f5f5",
    borderWidth: wp("0.75%"),
    marginBottom: wp('35%'),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
      fontWeight: 'bold',
      fontSize: hp('2%'),
      marginBottom: wp('1%')
  },
  value:{
      fontSize: hp('2%')
  }
});
