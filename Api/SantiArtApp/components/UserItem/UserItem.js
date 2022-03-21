import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ListItem from "../ListItem/ListItem";

function UserItem({ user }) {
  return (
    <ListItem>
      <TouchableOpacity>
        <View style={{ width: "100%" }}>
          <Text>{user.firstName}</Text>
          <Text>{user.lastName}</Text>
          <Text>{user.role}</Text>
        </View>
      </TouchableOpacity>
    </ListItem>
  );
}

export default UserItem;
