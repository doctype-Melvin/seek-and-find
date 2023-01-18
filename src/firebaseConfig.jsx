import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyC9v8SQCP9H-CQ2bAwJc6PBelNDMnR48Lc",
    authDomain: "seekandfind-5ff09.firebaseapp.com",
    projectId: "seekandfind-5ff09",
    storageBucket: "seekandfind-5ff09.appspot.com",
    messagingSenderId: "764778990986",
    appId: "1:764778990986:web:ffbd55765bc56ec2138c73"  
  };
  
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)