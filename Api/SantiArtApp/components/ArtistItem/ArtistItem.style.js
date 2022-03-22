import { StyleSheet } from "react-native";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
 container:{
  padding: wp('0.5%'),
  alignContent: 'center',
  width: wp('70%'),
 },
 containerImg:{
  alignContent: 'center',
  alignItems: 'center',
  marginTop: wp('-0.5%'),
  marginRight: wp('2%')
 },
  img:{
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 25
  },
  nameArtist:{
    flexDirection: 'row',
  
  },
  detailArtist:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})