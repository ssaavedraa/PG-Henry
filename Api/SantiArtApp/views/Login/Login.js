import { useRef, useState } from "react";
import {
  Alert,
  Button,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import style from "./Login.style.js";
import axios from "axios";
//Es para las pantallas responsives
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import Spinner from "../../components/Spinner/Spinner.js";
import HeaderWavy from "../../components/HeaderWavyLogin/HeaderWavy.js";
import Icon from "react-native-vector-icons/Ionicons";

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
          console.log(token);
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
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

  if (loading) return <Spinner />;

  return (
    <View style={style.container}>
      <View style={style.viewImage}>
        <Image source={require("../../assets/santArt.png")} style={style.img} />
      </View>
      <View style={style.loginForm}>
        <Text style={style.textWelcome}>Hi there!</Text>
        <Text style={{ marginBottom: wp("3%") }}>Welcome to SantArt App</Text>
        <View style={style.viewInputs}>
          <Icon name="mail-outline" size={25} color={'#7c7c7c'}/>
          <TextInput
            autoFocus
            placeholder="Email"
            keyboardType="email-address"
            autoComplete="email"
            defaultValue={email}
            autoCapitalize="none"
            onChangeText={(i) => setEmail(i)}
            onSubmitEditing={() => passRef.current.focus()}
            style={style.inputs}
          />
        </View>
        <View style={style.viewInputs}>
          <Icon name="key-outline" size={25} color={'#7c7c7c'} />
          <TextInput
            secureTextEntry
            placeholder="Password"
            defaultValue={password}
            onChangeText={(i) => setPassword(i)}
            onSubmitEditing={handleLogin}
            ref={passRef}
            style={style.inputs}
          />
        </View>

        <TouchableOpacity onPress={handleLogin} style={style.btnLogin}>
          <Text style={style.textLogin}>Login</Text>
        </TouchableOpacity>

        {/* <Button
     
        title="PASA DERECHO"
        onPress={() => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer eyJhbGciOiJIUzI1NiJ9.Ng.UYrNTe6rvfYBwkOQgCZsJMGOyp2rVnkAt20QVwtsGOs";
          navigation.replace("Home");
        }}
      /> */}
      </View>
    </View>
  );
}

export default Login;
