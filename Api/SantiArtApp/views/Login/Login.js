import { Button, View } from "react-native";

function Login({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Login" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default Login;
