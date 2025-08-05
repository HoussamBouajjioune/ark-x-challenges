console.log("Hello, World!");
console.log("This is day 12 of the coding challenge.");


const EventEmitter = require('events');

// Create an event emitter instance
const eventEmitter = new EventEmitter();

// Define an event handler function
const eventHandler = (data) => {
  console.log('Event occurred:', data);
};

// Register the event handler for the custom event
eventEmitter.on('customEvent', eventHandler);

// Simulate an event occurrence
eventEmitter.emit('customEvent', 'Event data');

const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for their name
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);

  // Close the readline interface
  rl.close();
});