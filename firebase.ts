import { getApp, getApps, initializeApp } from "firebase/app"
// import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// import { getFunctions } from "firebase/functions"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCw7E31YePOC8ZkW1hk2lA4l89shiirq7I",
    authDomain: "myapp-bd8ee.firebaseapp.com",
    projectId: "myapp-bd8ee",
    storageBucket: "myapp-bd8ee.appspot.com",
    messagingSenderId: "797679722907",
    appId: "1:797679722907:web:d6f33b946002008602813e"
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }