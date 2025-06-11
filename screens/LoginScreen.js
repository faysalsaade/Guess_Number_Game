import AuthContent from "../components/Auth/AuthContent";
import { useState } from "react";
import { login } from "../util.js/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    await login();
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
