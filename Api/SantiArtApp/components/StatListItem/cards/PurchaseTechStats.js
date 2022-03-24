import { Text, View } from "react-native";
import StackedBar from "../../StackedBar/StackedBar";
import StatListItem from "../StatListItem";
import colorsGenerator from "colors-generator";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

const colors = colorsGenerator.generate("#f2c786", 10).get();

function PurchaseTechStats({ techStats }) {
  let data = [];
  let i = 0;
  for (const key in techStats) {
    data.push({
      description: key,
      value: techStats[key].count,
      color: colors[i],
    });
    i += 2;
  }
  data = data.sort((f, s) => s.value - f.value);

  return (
    <StatListItem>
      <Text
        style={{
          fontSize: hp("2.5%"),
          alignSelf: "flex-start",
          fontWeight: 'bold',
        }}
      >
      Purchases by technique
      </Text>
      <StackedBar data={data} width={wp("85%")} height={hp("1.5%")} />
      {data.map((d, i) => (
        <View
          key={i}
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "flex-start",
            alignItems: 'center'
          }}
        >
          <MaterialCommunityIcons name="ellipse" style={{ color: d.color }} />
          <Text>{d.description}</Text>
          <View
            style={{
              alignSelf: "center",
              marginLeft: wp("2%"),
              marginRight: wp("2%"),
              flexGrow: 1,
              borderStyle: "dashed",
              borderBottomColor: "#DCDCDC",
              borderBottomWidth: 1,
            }}
          ></View>
          <View>
            <Text>{d.value}</Text>
          </View>
        </View>
      ))}
    </StatListItem>
  );
}

export default PurchaseTechStats;
