//
// Object Destructuring
//

// const person = {
//     name : 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name: firstname = 'Anonymous', age} = person;
// console.log(`${firstname} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

// let address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, , state, zip] = address;
// console.log(`You are in ${state}`);

// const [street, city, state, zip] = address;
// console.log(`You are in ${city}, ${state}`);

// address = []
// const [, , state = 'New York'] = address;
// console.log(`You are in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, smlPrice, medPrice, lrgPrice] = item;

console.log(`A medium ${itemName} costs ${medPrice}`);