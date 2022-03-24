import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    width: wp("30%"),
    height: hp("13%"),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
      fontSize: hp('1.60%'),
      marginBottom: wp('1%'),
  },
  value:{
      fontSize: hp('4.5%')
  },
  
});
