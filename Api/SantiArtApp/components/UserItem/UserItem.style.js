import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    width: wp("88%"),
    flex: 1,
  },
  btnList: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  textEmail: {
    fontWeight: "bold",
    fontSize: hp("2%"),
  },
  textName: {
    fontSize: hp("1.75%"),
  },
  viewRole: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBanned: {
    fontSize: hp("2.5%"),
    color: "#EC7063",
  },
  iconNoBanned: {
    fontSize: hp("2.5%"),
    color: "#5499C7",
  },
});
