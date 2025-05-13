import { View, Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
function Button({ children, onPress }) {
  return (
    <View>
      <Pressable onPress={onPress}>
        <View>
          <Text>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 4,
  },
});
