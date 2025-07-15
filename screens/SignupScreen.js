import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util.js/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);

    try {
      const token = await createUser(email, password);

      authCtx.authenticate(token);
    } catch (error) {
      console.error("Signup error:", error);
      Alert.alert(
        "Authentication failed",
        "Could not create user , Please check your input or try again later"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="creating user ..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
