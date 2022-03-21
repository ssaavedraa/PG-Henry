import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  containerPurchase: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('88%'),
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: wp('1%'),
    marginBottom: wp('2%')
  },
  textName: {
    fontWeight: 'bold',
    fontSize: hp('2%')
  },
  completed:{
    color: 'green',
    fontWeight: 'bold'
  },
  others:{
    color: '#FFD32D',
    fontWeight: 'bold'
  }
});
