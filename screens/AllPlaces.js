import PlaceList from "../components/Places/PlacesList";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/UI/IconButton";

function AllPlaces() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        console.log("Rendering headerRight IconButton");
        return (
          <IconButton
            icon="add-circle"
            size={24}
            color="#e63946"
            onPress={() => {
              console.log("Header IconButton pressed");
              navigation.navigate("AddPlace");
            }}
          />
        );
      },
    });
  }, [navigation]);
  return (
    <>
      <PlaceList />
      {/* Test IconButton in screen body */}
      <IconButton
        icon="add"
        size={32}
        color="#e63946"
        onPress={() => alert("Body IconButton pressed!")}
      />
    </>
  );
}

export default AllPlaces;
