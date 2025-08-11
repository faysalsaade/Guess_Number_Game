import PlaceList from "../components/Places/PlacesList";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/UI/IconButton";

function AllPlaces() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="add-circle"
          size={28}
          color="#e63946"
          onPress={() => navigation.navigate("AddPlace")}
        />
      ),
    });
  }, [navigation]);
  return <PlaceList />;
}

export default AllPlaces;
