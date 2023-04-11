import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8BJS_4AVDawNHoWMSMSpSoDO94C_VH6Q",
  authDomain: "brentwoodna-8e3dc.firebaseapp.com",
  databaseURL: "https://brentwoodna-8e3dc.firebaseio.com",
  projectId: "brentwoodna-8e3dc",
  storageBucket: "brentwoodna-8e3dc.appspot.com",
  messagingSenderId: "265742454750",
  appId: "1:265742454750:web:9726afe6ebdd3204dad74f",
  measurementId: "G-0DZVRQRK74",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
