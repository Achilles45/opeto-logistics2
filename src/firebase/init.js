import firebase from 'firebase'
import firestore from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBKexHeJk7HxdV_YnopTz3sTPGaJzF5VuY",
  authDomain: "courier-app-86471.firebaseapp.com",
  databaseURL: "https://courier-app-86471.firebaseio.com",
  projectId: "courier-app-86471",
  storageBucket: "courier-app-86471.appspot.com",
  messagingSenderId: "360501964838",
  appId: "1:360501964838:web:32a756588425066cecf6e7",
  measurementId: "G-PTX7WLNRT8"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebaseApp.firestore()