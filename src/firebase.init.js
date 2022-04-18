// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBWD3MevAwjzvyNsTrXZiA4A_XWHahrcx4",
	authDomain: "travel-in-d5e7a.firebaseapp.com",
	projectId: "travel-in-d5e7a",
	storageBucket: "travel-in-d5e7a.appspot.com",
	messagingSenderId: "641586487701",
	appId: "1:641586487701:web:e8730ec6ff84209747569c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
