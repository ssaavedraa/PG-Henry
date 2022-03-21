import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: wp("2%"),
    flex: 1,
  },
  containerStatusDetail:{
      display: 'flex',
      flexDirection: 'row',
      width: wp('95%'),
      justifyContent: 'space-between'
  }
});
