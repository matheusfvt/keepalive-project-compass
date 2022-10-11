import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAov-Z1-AseEtxocqT-v4BVckaO3kxUPyc",
  authDomain: "keepalive-compass-84453.firebaseapp.com",
  databaseURL: "https://keepalive-compass-84453-default-rtdb.firebaseio.com",
  projectId: "keepalive-compass-84453",
  storageBucket: "keepalive-compass-84453.appspot.com",
  messagingSenderId: "690347482260",
  appId: "1:690347482260:web:0c15b4d5d93bf192366881"
};


export const app = initializeApp(firebaseConfig);