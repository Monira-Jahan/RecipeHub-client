// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoOxKxablRPDxJrGhrsX5YLVFPVaDMOB0",
  authDomain: "b710-chef-recipe-hunter-client.firebaseapp.com",
  projectId: "b710-chef-recipe-hunter-client",
  storageBucket: "b710-chef-recipe-hunter-client.appspot.com",
  messagingSenderId: "431337990429",
  appId: "1:431337990429:web:eb2da03d9a4c861a5159f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;