import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    // backgroundColor: "white",
    flex: 1,
    padding: wp("4%"),
  },
  containerStats: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: wp("7%"),
  },
  viewImg: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingTop: wp("4%"),
  },
  textBiography: {
    paddingVertical: wp("3%"),
  },
  textName: {
    paddingVertical: wp("4%"),
    fontSize: hp("2.75%"),
    fontWeight: "bold",
  },
  img: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
  },
  textBiography: {
    fontSize: hp("1.9%"),
    paddingTop: wp("3%"),
  },
  viewEmail: {
    paddingVertical: wp("1%"),
    borderBottomColor: "#DCDCDD",
    borderTopColor: "#DCDCDD",
    borderTopWidth: wp("0.25%"),
    borderBottomWidth: wp("0.25%"),
  },
  textIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    paddingHorizontal: wp('2%'),
    paddingVertical: wp('1%'),
    fontSize: hp('1.9%')
  },
  stats: {
    paddingBottom: wp("1.25%"),
    marginTop: wp('4%'),
    fontSize: hp('2.15%'),
    fontWeight: 'bold',
    borderBottomWidth: wp("0.25%"),
    borderColor: "#DCDCDD",
  }
});
