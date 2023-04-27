import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAI0ruIhMQi0PHgFfmjmcYZJv4YYL9uYgQ",
    authDomain: "flight-app-firebase.firebaseapp.com",
    projectId: "flight-app-firebase",
    storageBucket: "flight-app-firebase.appspot.com",
    messagingSenderId: "1024976940927",
    appId: "1:1024976940927:web:61c77527c31087aef2744a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);