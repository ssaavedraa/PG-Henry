import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  customerInfo: {
    padding: wp("2%"),
    borderRadius: wp("2%"),
    elevation: 4,
    backgroundColor: "white",
    margin: wp("2%"),
  },
  textPrincipal: {
    fontWeight: "bold",
    fontSize: hp("2.15%"),
    borderBottomWidth: wp("0.5%"),
    borderColor: "#f5f5f5",
    marginBottom: wp('2%')
  },
  text:{
   textAlign: 'justify',
   marginLeft: wp('2%'),
   fontSize: hp('1.9%'),
   marginVertical: wp('0.5%')
  },
  viewItems: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
  }
});
