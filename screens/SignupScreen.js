import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util.js/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    await createUser();
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="creating user ..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
