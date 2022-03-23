import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  containerArtist: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerImg: {
    alignContent: "center",
    alignItems: "center",
    marginRight: wp("3%"),
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 25,
  },
  nameArtist: {
    marginBottom: wp("0.5%"),
  },
  textName: {
    fontSize: hp("2.15%"),
    fontWeight: "bold",
  },
  viewIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
});
