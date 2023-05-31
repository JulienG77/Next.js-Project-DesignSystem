// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

//
// Your web app's Firebase configuration
//  OLD SETUP
// const firebaseConfig = {
//
//     apiKey: "AIzaSyB8evXhjnYJ4vN636MqowHzjl_3jnowyRI",
//
//     authDomain: "projetnextmonkey.firebaseapp.com",
//
//     projectId: "projetnextmonkey",
//
//     storageBucket: "projetnextmonkey.appspot.com",
//
//     messagingSenderId: "1022447178884",
//
//     appId: "1:1022447178884:web:e9dcc10bea951c686eded1"
// };
const firebaseConfig = {
    apiKey: "AIzaSyDku59EJ6XoGak8uvdQxeq1B3DMWbRpwFo",

    authDomain: "monkeytest1-ec597.firebaseapp.com",

    projectId: "monkeytest1-ec597",

    storageBucket: "monkeytest1-ec597.appspot.com",

    messagingSenderId: "218322387768",

    appId: "1:218322387768:web:b8fcd8233c13e72e60f7cd"

}

//
// const firebaseConfig = {
//
//     apiKey: process.env.API_KEY,
//
//     authDomain: process.env.AUTH_DOMAIN,
//
//     projectId: process.env.PROJECT_ID,
//
//     storageBucket: process.env.STORAGE_BUCKET,
//
//     messagingSenderId: process.env.MESSAGING_SENDER_ID,
//
//     appId: process.env.APP_ID,
//
//     measurementId: process.env.MEASUREMENT_ID,
// };
//

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
