import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  containerContainer: {
    backgroundColor: "white",
    marginTop: wp('4%')
  },
  container: {
    padding: wp("2%"),
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: wp('2.5%')
  },
  textFilter: {
    margin: wp('2%'),
    fontSize: hp("2.2%"),
    textAlign: "center",
    fontWeight: "bold",
    
  },
  filter: {
    height: hp("12%"),
    width: wp("17%"),
    justifyContent: "center",
    borderColor: "#f5f5f5",
    borderWidth: wp("0.75%"),
    borderRadius: wp("1%"),
    elevation: 2,
    backgroundColor: "white",
    
  },
  iconText: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  textNameFilter: {
    fontSize: hp("1.25%"),
    fontWeight: "bold",
    color: '#D1D1D1'
  },

  textNameFilterSelected:{
    fontSize: hp("1.25%"),
    fontWeight: "bold",
    color: '#125D98'
    
  },
  icons: {
    fontSize: hp("5.5%"),
    color: '#D1D1D1',
    
  },
  iconsSelected: {
    fontSize: hp("5.5%"),
    color: '#125D98',
    
  },
});
