// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_neiI5S11VQpRMP5kZA9H8vjcG8bvL24",
  authDomain: "news-articles-91cf0.firebaseapp.com",
  projectId: "news-articles-91cf0",
  storageBucket: "news-articles-91cf0.appspot.com",
  messagingSenderId: "193247271690",
  appId: "1:193247271690:web:58a29a9ab1bf5c805d78f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();