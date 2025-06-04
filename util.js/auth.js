import axios from "axios";

const API_KEY = "AIzaSyBcUQVGS-lZQIOFUnuWrfjW0CWoTQ6YE38";
async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= " +
      API_KEY{
        email:email,
        password:password,
        returnSecureTocken:true
      }
  );
}
