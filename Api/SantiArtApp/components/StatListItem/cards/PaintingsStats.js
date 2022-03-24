import { Text, View } from "react-native";
import StackedBar from "../../StackedBar/StackedBar";
import StatListItem from "../StatListItem";
import colorsGenerator from "colors-generator";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

const colors = colorsGenerator.generate("#86bff2", 10).get();

function PaintingStats({ paintingData }) {
  const data = [
    {
      description: "Available",
      value: paintingData.available,
      color: colors[0],
    },
    {
      description: "Not available",
      value: paintingData.notAvailable,
      color: colors[1],
    },
  ];

  return (
    <StatListItem>
      <Text
        style={{
          fontSize: hp("2.5%"),
          alignSelf: "flex-start",
          fontWeight: 'bold',
        }}
      >
      Paintings availability
      </Text>
      <StackedBar data={data} width={wp("85%")} height={hp("1.5%")} />
      {data.map((d, i) => (
        <View
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "flex-start",
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

export default PaintingStats;
