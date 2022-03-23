import { View } from "react-native";
import style from "./ListItem.style";

function ListItem({ children }) {
  return <View style={style.container}>{children}</View>;
}

export default ListItem;
