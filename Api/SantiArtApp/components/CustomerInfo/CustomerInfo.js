import { View, Text } from "react-native";
import React from "react";
import style from "./CustomerInfo.style";
import Icon from "react-native-vector-icons/Ionicons";

export default function CustomerInfo({ purchase }) {
  return (
    <View style={style.customerInfo}>
      <Text style={style.textPrincipal}>Customer's information</Text>
      <View style={style.viewItems}>
        <Icon name="person-outline" size={22} color={'black'}/>
        <Text style={style.text}>
          {purchase.contactInfo.firstName} {purchase.contactInfo.lastName}
        </Text>
      </View>
      <View style={style.viewItems}>
        <Icon name="mail-outline" size={22} color={'black'} />
        <Text style={style.text}>{purchase.contactInfo.email}</Text>
      </View>
      <View style={style.viewItems}>
        <Icon name="call-outline" size={22} color={'black'} />
        <Text style={style.text}>{purchase.contactInfo.telephone}</Text>
      </View>
      <View style={style.viewItems}>
        <Icon name="location-outline" size={22} color={'black'} />
        <Text style={style.text}>{purchase.contactInfo.city}</Text>
      </View>
    </View>
  );
}
