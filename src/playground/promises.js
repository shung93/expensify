const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('this is my resolved data');
        // resolve('This is my other resolved data'); // this is ignored; you can only pass ONE resolve
        reject('something went wrong')
    }, 1500);
});

console.log('before');

promise.then((data) => { // this only fires if the promise has fired; it doesn't wait > you can move on to your next code
    console.log(data);
}).catch((error) => {
    console.log('error: ', error);
}); 

console.log('after');