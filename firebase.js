import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_xlI1lzoKAX_f9D2UveP8xmP9Pf4tkHg",
  authDomain: "blinkit-620d5.firebaseapp.com",
  projectId: "blinkit-620d5",
  storageBucket: "blinkit-620d5.appspot.com",
  messagingSenderId: "468418993430",
  appId: "1:468418993430:web:d54b461749a4babf1b4437",
  measurementId: "G-HY4VZ8GQQW",
};

export const provider = new GoogleAuthProvider();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
