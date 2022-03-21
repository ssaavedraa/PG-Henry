import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    width: wp("94%"),
    height: hp("8%"),
    backgroundColor: 'white', 
    borderRadius: wp('2%'),
    marginBottom: wp('2%'),
    marginTop: wp('2%'),
    marginLeft: wp('3%'),
    flexDirection: "row",
    padding: wp('2.5%'),
  },
});
