import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSDW7l1ePpB8i9GMjaBd9PnDaLZjPUf8o",
  authDomain: "hecation-app.firebaseapp.com",
  projectId: "hecation-app",
  storageBucket: "hecation-app.appspot.com",
  messagingSenderId: "592127177624",
  appId: "1:592127177624:web:b6ddce7cf825c6843b71ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);