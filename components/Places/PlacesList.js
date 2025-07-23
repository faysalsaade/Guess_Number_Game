import { FlatList } from "react-native-gesture-handler";
import PlaceItem from "./placeItem";
import { View, StyleSheet } from "react-native";

function PlaceList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View>
        <Text>No places added yet - start adding some!</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
}
export default PlaceList;
const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
