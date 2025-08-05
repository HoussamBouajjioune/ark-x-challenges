// app.js
const file = require('./fs');

// file.readFileAsync('./example.txt');

// file.writeFileAsync('./example.txt' , 'Hello, World!');

// let content = file.readFileAsync('./example.txt');
// console.log(`Content read: ${content}`);

file.processFiles('./example.txt' , './txt1.txt', './txt2.txt');
