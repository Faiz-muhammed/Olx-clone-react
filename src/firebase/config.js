import firebase  from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCnQjF2BkuA4t9TgYPow_wlpiQKQyBuEFk",
    authDomain: "olx-clone-f6694.firebaseapp.com",
    projectId: "olx-clone-f6694",
    storageBucket: "olx-clone-f6694.appspot.com",
    messagingSenderId: "950292044408",
    appId: "1:950292044408:web:34bec466d06b004fe9ab8d",
    measurementId: "G-3186QZTF3L"
  };

export default firebase.initializeApp(firebaseConfig)