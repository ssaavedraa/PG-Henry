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
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("72%"),
    alignItems: "center",
  },
  viewScore: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  textScore: {
    fontSize: hp("1.9%"),
    paddingLeft: wp("1%"),
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
