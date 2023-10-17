import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCULf7RyhQShJLOqxfA9BiW9pLEvbehPjA",
    authDomain: "fb9-reading-list-679f2.firebaseapp.com",
    projectId: "fb9-reading-list-679f2",
    storageBucket: "fb9-reading-list-679f2.appspot.com",
    messagingSenderId: "50043843602",
    appId: "1:50043843602:web:16d30d67bb3e8a7a2754cb"
};


initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export {db, auth}