import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore' 


const firebaseConfig = {
    apiKey: "AIzaSyA_i2IMBMZ99f2mg8ZnSLWQLE3b3Nir0wU",
    authDomain: "instagram-web-18912.firebaseapp.com",
    projectId: "instagram-web-18912",
    storageBucket: "instagram-web-18912.appspot.com",
    messagingSenderId: "728462013102",
    appId: "1:728462013102:web:42996ddaf5ff549628333f"
  };


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}