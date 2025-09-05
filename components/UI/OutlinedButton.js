import { StyleSheet, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
function OutlinedButton({ onPress, icon, children }) {
  return (
    <Pressable onPress={onPress}>
      {icon && <Ionicons name={icon} size={18} color={Colors.primary500} />}
      <Text>{children}</Text>
    </Pressable>
  );
}
export default OutlinedButton;
const styles = StyleSheet.create({
  button: {},
  pressed: {},
  icon: {},
  text: {},
});
