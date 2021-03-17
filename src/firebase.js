import firebase from 'firebase'
import '@firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA0CWxjzPLOdd3ex_NlY0rkJC-zBSknlFM",
    authDomain: "tictactoe-d9ae1.firebaseapp.com",
    projectId: "tictactoe-d9ae1",
    storageBucket: "tictactoe-d9ae1.appspot.com",
    messagingSenderId: "788053425541",
    appId: "1:788053425541:web:38cf37e0b87a62aab7d8ec"
};

firebase.initializeApp(firebaseConfig)

export default firebase