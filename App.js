import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <CategoriesScreen />;
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
});
