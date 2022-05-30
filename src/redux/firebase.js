
import firebase from 'firebase/compat/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore

const firebaseConfig = {
    apiKey: "AIzaSyDLtmDvYQsj1WqJ2nTrqtVgIZUTsjDCvjA",
    authDomain: "react-worklist.firebaseapp.com",
    databaseURL: "https://react-worklist-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-worklist",
    storageBucket: "react-worklist.appspot.com",
    messagingSenderId: "532978782014",
    appId: "1:532978782014:web:4f8e7d88b7212f8568a66f"
  };


// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore


export default firebase