import { useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  TextInput,
  View,
} from "react-native";
import style from "./Login.style.js";
import axios from "axios";

const popUp = (msg) => {
  Alert.alert("Login failed :(", msg, [{ text: "OK" }]);
};

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const passRef = useRef();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/user/login", {
        email: email.toLowerCase(),
        password,
      });
      const { status, message, user, token } = data;
      if (status === "error") {
        popUp(message);
      } else {
        if (user.role !== "admin") {
          popUp(message);
        } else {
          axios.defaults.headers.common["Authorization"] = token;
          navigation.replace("Home");
          return;
        }
      }
    } catch (err) {
      popUp(err.message);
    }
    setEmail("");
    setPassword("");
    setLoading(false);
  };

  if (loading)
    return (
      <ActivityIndicator
        style={{
          flex: 1,
          justifyContent: "center",
        }}
        size="large"
        color="#0000ff"
      />
    );
  return (
    <View style={style.loginForm}>
      <TextInput
        autoFocus
        placeholder="Email"
        keyboardType="email-address"
        autoComplete="email"
        defaultValue={email}
        autoCapitalize="none"
        onChangeText={(i) => setEmail(i)}
        onSubmitEditing={() => passRef.current.focus()}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        defaultValue={password}
        onChangeText={(i) => setPassword(i)}
        onSubmitEditing={handleLogin}
        ref={passRef}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Home" onPress={() => navigation.replace("Home")} />
    </View>
  );
}

export default Login;
