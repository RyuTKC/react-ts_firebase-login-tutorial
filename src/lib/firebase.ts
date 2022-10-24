import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDD7VZs_xJ6YyO7hM4UrzT9Me-B8Y5dGPk",
  authDomain: "fir-login-tutorial-8128d.firebaseapp.com",
  projectId: "fir-login-tutorial-8128d",
  storageBucket: "fir-login-tutorial-8128d.appspot.com",
  messagingSenderId: "352420548252",
  appId: "1:352420548252:web:a7b88a6334271bc652e759"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider }