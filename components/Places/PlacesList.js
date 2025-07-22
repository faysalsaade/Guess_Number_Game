import { FlatList } from "react-native-gesture-handler";

function PlaceList({places}) {
return <FlatList data={places} keyExtractor={item => item.id} renderItem={}  />;
}
export default PlaceList;   

