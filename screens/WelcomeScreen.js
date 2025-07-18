import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        "https://react-native-course-1007c-default-rtdb.firebaseio.com/message.json?auth=" +
          token
      )
      .then((response) => {
        setFetchedMessage(respo!</Text>
      <Text style={styles.message}>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  message: {
    fontSize: 13.7,
    color: "#9000ffff",
    textAlign: "center",
  },
});
