import { ActivityIndicator } from "react-native";

function Spinner() {
  return (
    <ActivityIndicator
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'white'
      }}
      size="large"
      color="#0000ff"
    />
  );
}

export default Spinner;
