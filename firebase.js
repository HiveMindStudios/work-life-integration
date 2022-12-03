
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBSDW7l1ePpB8i9GMjaBd9PnDaLZjPUf8o",
    authDomain: "ecation-app.firebaseapp.com",
    projectId: "hecation-app",
    storageBucket: "hecation-app.appspot.com",
    messagingSenderId: "592127177624",
    appId: "1:592127177624:web:b6ddce7cf825c6843b71ed"
}
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };