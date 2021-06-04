import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2y88De3ya-0Ic5D9-sMJjU0ZO6x_6zsQ",
  authDomain: "chatskoot-cfc8c.firebaseapp.com",
  projectId: "chatskoot-cfc8c",
  storageBucket: "chatskoot-cfc8c.appspot.com",
  messagingSenderId: "452034192810",
  appId: "1:452034192810:web:6141551a5715887829f7d3",
};

let app;
if (firebase.apps.length ===0) {
app = firebase.initializeApp(firebaseConfig);	
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
