import { View, Text, FlatList } from "react-native";

function ExpenseOutPut({ expenses }) {
  return (
    <View>
      <View>
        <Text>Last 7 days</Text>
        <Text>$177.95</Text>
      </View>
      <FlatList />
    </View>
  );
}
export default ExpenseOutPut;
