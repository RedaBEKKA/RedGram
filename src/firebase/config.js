import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAahkDmHRVGLxcG_3SjUsqBdx5fBW2-B5A",
    authDomain: "redgram-app.firebaseapp.com",
    databaseURL: "https://redgram-app.firebaseio.com",
    projectId: "redgram-app",
    storageBucket: "redgram-app.appspot.com",
    messagingSenderId: "547106059071",
    appId: "1:547106059071:web:db44951551d74b0fa4198a",
    measurementId: "G-HMK8KF82PX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  //Initialiser storage service et firestore
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export{projectFirestore,projectStorage,timestamp};