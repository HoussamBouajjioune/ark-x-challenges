console.log("------------------------------------");

// return masked string
function maskify(cc) {

    let result = "";
    if (cc.length <= 4) {
        result = cc;
        return result;
    } else {
        for (let i = 0; i < cc.length ; i++) {
            if (i < cc.length - 4)
                result += "*";
            else
                result += cc[i];
        }
        return result;
    }

}

console.log(maskify("4556364607935616")); // "*****5678"


const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question and handle the answer using a callback
function askQuestion(question, callback) {
  rl.question(question, (answer) => {
    callback(answer); // Execute the callback with the user's answer
  });
}

// // Usage example
// askQuestion("What's your name? ", function (name) {
//   console.log(`Hello, ${name}!`);
//   rl.close(); // Close the Readline interface
// });

const myPromise = new Promise(function (resolve, reject) {
const alright = false;
    setTimeout(function () { 
        if (alright) resolve("Everything went well");
        else reject("Encountered an error");
    }, 1000)
}); 

console.log("1");
myPromise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Promise completed");
  });
console.log("2");
// output: 
// 1
// 2
// Everything went well
// Promise completed