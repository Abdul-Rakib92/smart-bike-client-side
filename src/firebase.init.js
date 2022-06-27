// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCdXiWL2sYxTGdSxNeS1Q0PiMIIHRnPNok",
  authDomain: "smart-bike-client.firebaseapp.com",
  projectId: "smart-bike-client",
  storageBucket: "smart-bike-client.appspot.com",
  messagingSenderId: "90342803297",
  appId: "1:90342803297:web:c6731a8b8790b41d07a720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
