import * as firebase from 'firebase';
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('job/company').set('Google');
// }, 3500);

// setTimeout(() => {
//     database.ref('name').set('Sam');
// }, 7000);

// database.ref() // whatever you ref is what you get from that specific value or object 
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// // ref means REFERENCE and set will WIPE out whatever you had in the database before 
// database.ref().set({ 
//     name: 'Andrew Mead',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google',
//     },
//     location: {
//         city: 'philly',
//         country: 'usa'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((error) => {
//     console.log('This failed.', error);
// });

// database.ref('attributes').set({ // how to set a new object as a child 
//     height: 73,
//     weight: 150,
// }).then(() => {
//     console.log('Second set call worked');
// }).catch((error) => {
//     console.log('This failed twice.', error);
// });

// database.ref().update({ // only updates at the root level > it will update everything literally 
//     'stressLevel': 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });
