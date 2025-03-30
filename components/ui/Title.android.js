import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderWidth: 20,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
