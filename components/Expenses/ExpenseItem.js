import { Pressable, View, Text } from "react-native";

function ExpenseItem() {
  return (
    <Pressable>
      <View>
        <Text>DESCRIPTION</Text>
        <Text>AMOUNT</Text>
        <Text>DATE</Text>
      </View>
    </Pressable>
  );
}
export default ExpenseItem;
