// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOoJqmAwlPLrx77M79f79mNuMBEdFiBCI",
  authDomain: "food-share-web.firebaseapp.com",
  projectId: "food-share-web",
  storageBucket: "food-share-web.firebasestorage.app",
  messagingSenderId: "363888097409",
  appId: "1:363888097409:web:db5dee457228e438b7f580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;