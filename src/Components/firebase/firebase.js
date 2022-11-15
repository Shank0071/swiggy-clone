import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyChq4vzQAMSGnuSHmRoynnKsRpKJu1Nglw",
    authDomain: "udemy-modernjavascript-eaeaf.firebaseapp.com",
    projectId: "udemy-modernjavascript-eaeaf",
    storageBucket: "udemy-modernjavascript-eaeaf.appspot.com",
    messagingSenderId: "149155744654",
    appId: "1:149155744654:web:52a9c5d9d40d21565632df",
    measurementId: "G-5YC1TE9SBP"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth()

export { auth }