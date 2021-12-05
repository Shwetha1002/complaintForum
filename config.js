import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyAhAwg2dQJKu7uPUAr49GfWelg7U7gWdB4",
 authDomain: "complaintforum-d941c.firebaseapp.com",
 projectId: "complaintforum-d941c",
 storageBucket: "complaintforum-d941c.appspot.com",
 messagingSenderId: "887159040577",
 appId: "1:887159040577:web:e41f4c9757d9830b25b4c0"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

