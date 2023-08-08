// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6elNUaVLk22d_kZKgsdZgRsDwXU_AtEM",
  authDomain: "my-personal-website-46b9d.firebaseapp.com",
  projectId: "my-personal-website-46b9d",
  storageBucket: "my-personal-website-46b9d.appspot.com",
  messagingSenderId: "491715733455",
  appId: "1:491715733455:web:9a41070267a7a05b9f14ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app