// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfXcJtDjIdjfwKV2H8Q9NMf4DG5HKg2Og",
  authDomain: "beuzeville-2cd10.firebaseapp.com",
  databaseURL: "https://beuzeville-2cd10-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "beuzeville-2cd10",
  storageBucket: "beuzeville-2cd10.appspot.com",
  messagingSenderId: "43312734560",
  appId: "1:43312734560:web:daafa2b11ba5d396f1be05",
  measurementId: "G-XLFMED871L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

