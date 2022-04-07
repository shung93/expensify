import * as firebase from 'firebase';
import * as expensesActions from '../actions/expenses';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = firebase.initializeApp(config);
const database = firebase.database();

export {firebase, database as default};

// child_removed > subscriber every time a child is removed 
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed 
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added 
// database.ref('expenses').on('child_added', (snapshot) => { // called once for existing children and then again when children are changed 
//     console.log(snapshot.key, snapshot.val());
// });

// const onValueChange = database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses =[];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     }, (e) => {
//         console.log('Error with data fetching', e);
//     });