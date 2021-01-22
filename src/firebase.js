import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_hwKHL2hdVOMoxboAiPVp17O_eYxOBWg",
  authDomain: "the-match-f165b.firebaseapp.com",
  databaseURL: "https://the-match-f165b-default-rtdb.firebaseio.com",
  projectId: "the-match-f165b",
  storageBucket: "the-match-f165b.appspot.com",
  messagingSenderId: "757681546063",
  appId: "1:757681546063:web:e97e481509c8226479db3a",
  measurementId: "G-ZXH1RSMLZ5",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseDB,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
};
