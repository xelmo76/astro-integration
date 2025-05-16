/* shared.js  ------------------------------------------------------------ */
/* 1) caricato DOPO gli script Firebase compat nelle varie pagine
   2) espone auth e db su window per semplicità                       */

const firebaseConfig = {
  apiKey: "AIzaSyC-yq-I_vTDSOk4geEdve2vv7YUK9WztV4",
  authDomain: "astro-calc-75aad.firebaseapp.com",
  projectId:  "astro-calc-75aad",
  storageBucket: "astro-calc-75aad.firebasestorage.app",
  messagingSenderId: "941070167137",
  appId: "1:941070167137:web:23fb9bfffaa4ea3d944e20",
  measurementId: "G-GNH4W6W0LD"
};

firebase.initializeApp(firebaseConfig);
window.auth = firebase.auth();
window.db   = firebase.firestore();
