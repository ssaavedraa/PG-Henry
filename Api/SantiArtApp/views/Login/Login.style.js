import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  loginForm: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  inputs: {
    width: wp('90%'),
    height: hp('8%'),
    borderColor: '#F3F1F5',
    borderWidth: wp('0.9%'),
    marginTop: wp('7%'),
    borderRadius: wp('4%'),
    fontSize: hp('2.15%'),
    paddingLeft: wp('2.5%')
  },
  btnLogin: {
    width: wp('90%'),
    height: hp('8%'),
    backgroundColor: '#168AAD',
    marginTop: wp('7%'),
    borderRadius: wp('4%')
  },
  textLogin: {
    color: 'white',
    fontSize: hp('3%'),
    textAlign: 'center',
    marginTop: wp('2.75%'),
    fontWeight: "bold"
    
  }
});
