import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./views/Login/Login";
import Home from "./views/Home";
import axios from "axios";
import PurchaseDetail from "./views/PurchaseDetail/PurchaseDetail";
import { API_URL } from "@env";
import ArtistDetail from "./views/ArtistDetail/ArtistDetail";

axios.defaults.baseURL = API_URL || "https://santart-backend.herokuapp.com/";
console.log(API_URL)

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="PurchaseDetail" component={PurchaseDetail} />
        <Stack.Screen name="ArtistDetail" component={ArtistDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
