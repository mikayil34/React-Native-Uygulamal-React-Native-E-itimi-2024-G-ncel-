// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ-XfB4yzsqdl0EnYs9GCzM_-cDApSv8A",
  authDomain: "login-36dbf.firebaseapp.com",
  projectId: "login-36dbf",
  storageBucket: "login-36dbf.appspot.com",
  messagingSenderId: "159927455187",
  appId: "1:159927455187:web:3968dac0ee79f9d98d3326"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const auth = firebase.auth();
  
  export { auth };