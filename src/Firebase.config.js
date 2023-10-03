// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVLhcI135RzkoJoQEUN9crqCXnqozomE0",
  authDomain: "task-one-aa91e.firebaseapp.com",
  projectId: "task-one-aa91e",
  storageBucket: "task-one-aa91e.appspot.com",
  messagingSenderId: "363175337792",
  appId: "1:363175337792:web:638a89ad8a5e441b12a4a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app