import { View } from "react-native";
import style from "./StatListItem.style";

function StatListItem({ children }) {
  return <View style={style.container}>{children}</View>;
}

export default StatListItem;
