import { Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function StackedBar({ data, width, height }) {
  const total = data.reduce((pv, cv) => pv + cv.value, 0);

  const dataPerc = data.map((d) => {
    return {
      ...d,
      width: (d.value / total) * width,
      perc: (d.value * 100) / total,
    };
  });

  return (
    <View
      style={{
        width,
        display: "flex",
        flexDirection: "column",
        marginBottom: hp("3%"),
        marginTop: hp("3%"),
      }}
    >
      <View
        style={{
          width,
          height: "auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {dataPerc.map((d, i) => (
          <View
            key={i}
            style={{
              width: d.width < 1 ? 1 : d.width,
              minWidth: 16,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text>{d.display || d.value}</Text>
          </View>
        ))}
      </View>
      <View
        style={{
          width,
          height,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {dataPerc.map((d, i) => (
          <View
            key={i}
            style={{
              height,
              width: d.width < 1 ? 1 : d.width,
              backgroundColor: d.color,
            }}
          ></View>
        ))}
      </View>
      <View
        style={{
          width,
          height: "auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {dataPerc.map((d, i) => (
          <View
            key={i}
            style={{
              width: d.width < 1 ? 1 : d.width,
              minWidth: 15,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "gray", fontSize: 10 }}>
              {Math.round(d.perc)}%
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default StackedBar;
