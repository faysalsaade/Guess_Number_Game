import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import { Colors } from "./components/constants/colors";
import IconButton from "./components/UI/IconButton";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={{
              title: "Your Favorite Places",
              headerRight: () => (
                <IconButton
                  icon="add-circle"
                  size={36}
                  color="#e63946"
                  onPress={() => alert("Header button pressed!")}
                />
              ),
            }}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "Add a New Place",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
