import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBx3OYUQYGoZJpyiQVPRvvGODTEuhPWzSA",
    authDomain: "facebook-webapp-clone.firebaseapp.com",
    projectId: "facebook-webapp-clone",
    storageBucket: "facebook-webapp-clone.appspot.com",
    messagingSenderId: "264700069824",
    appId: "1:264700069824:web:111ca49d7f1759d6bdea25"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db