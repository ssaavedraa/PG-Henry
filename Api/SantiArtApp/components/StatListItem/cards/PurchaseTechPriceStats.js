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

function PurchaseTechPriceStats({ techStats }) {
  let data = [];
  let i = 0;
  for (const key in techStats) {
    data.push({
      description: key,
      value: techStats[key].total,
      display: "$" + techStats[key].total,
      color: colors[i],
    });
    i += 2;
  }
  data = data.sort((f, s) => s.value - f.value);

  return (
    <StatListItem>
      <Text
        style={{
          fontSize: wp("5%"),
          alignSelf: "flex-start",
        }}
      >
        ○ Revenue by techniques
      </Text>
      <StackedBar data={data} width={wp("80%")} height={hp("1%")} />
      {data.map((d, i) => (
        <View
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "flex-start",
            justifyContent: "center",
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
            <Text>{d.display}</Text>
          </View>
        </View>
      ))}
    </StatListItem>
  );
}

export default PurchaseTechPriceStats;
