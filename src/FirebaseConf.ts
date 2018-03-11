import * as firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET
};
const firebaseApp = firebase.initializeApp(config);

export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();