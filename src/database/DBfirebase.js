import * as firebase from 'firebase';

// var config = {
//  apiKey: "AIzaSyDUbqPls1aDhX0MF_8iqDYfLKyqdZqiFvM",
//     authDomain: "report-crimes-app-in-react.firebaseapp.com",
//     databaseURL: "https://report-crimes-app-in-react.firebaseio.com",
//     storageBucket: "report-crimes-app-in-react.appspot.com",
//     messagingSenderId: "818357914916"
// };
// firebase.initializeApp(config);

var config = {
    apiKey: "AIzaSyA6JsXILuluDD47kM8F0qFLd6qSgfZhHPg",
       authDomain: "college-project-2fea9.firebaseapp.com",
       databaseURL: "https://college-project-2fea9-default-rtdb.firebaseio.com",
       storageBucket: "college-project-2fea9.appspot.com",
       messagingSenderId: "782354087051"
   };
firebase.initializeApp(config);

// const firebaseConfig = {
//     apiKey: "AIzaSyA6JsXILuluDD47kM8F0qFLd6qSgfZhHPg",
//     authDomain: "college-project-2fea9.firebaseapp.com",
//     databaseURL: "https://college-project-2fea9-default-rtdb.firebaseio.com",
//     projectId: "college-project-2fea9",
//     storageBucket: "college-project-2fea9.appspot.com",
//     messagingSenderId: "782354087051",
//     appId: "1:782354087051:web:abd038ba08301c9225a88e"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
export class DBfirebase {

    static ref = firebase.database().ref();
    static storage = firebase.storage().ref();
    static auth = firebase.auth();
    static refFeedback = firebase.database().ref('feedbackList');
    // static refMissing = firebase.database().ref('MissingPeople');
    static refMissing = firebase.database().ref('ProjectName');
    

    static saveMultipath(multipath) {
        return this.ref.update(multipath);
    } // saveMultipath

    static customAuth(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.password);
    } //AuthNewUser

    static customLogin(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.password);
    } //loginUser

    static addNewUser(user) {
        return this.ref.child(user).set();
    } //AuthNewUser

    static getPushRef(path) {
        return this.ref.child(path).push();
    }

// static Logout(){
//     return this.auth.signOut()
//         console.log("Signed out");
// }



}