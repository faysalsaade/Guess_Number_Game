import { View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
function LocationPicker() {
  function getLocationHandler() {}
  function pickOnMapHandler() {}
  return (
    <View>
      <View></View>
      <View>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          LocationPicker
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on map
        </OutlinedButton>
      </View>
    </View>
  );
}
export default LocationPicker;
