import firebase from 'firebase'
import firestore from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBwHmGLwsbNp4umFKnPGxkiLW4i4l-NlSI",
  authDomain: "oceanflow-15c0d.firebaseapp.com",
  projectId: "oceanflow-15c0d",
  storageBucket: "oceanflow-15c0d.appspot.com",
  messagingSenderId: "986938432040",
  appId: "1:986938432040:web:67940338c35bba97ebf31d",
  measurementId: "G-LZBTYRT3DM"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebaseApp.firestore()