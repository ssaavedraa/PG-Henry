import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  detailArtist: {
    width: wp("80%"),
  },
  statsArtist: {
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
    marginBottom: wp('3%')
  },
  textIcons: {
    fontSize: hp("1.7%"),
    marginRight: wp("1%"),
  },
  containerDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
