// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = "Sample data"; // Simulated data
//       // Resolve the Promise with the fetched data
//       resolve(data);
//       // Reject the Promise with an error if needed
//       // reject(new Error("Failed to fetch data"));
//     }, 2000); // Simulating a 2-second delay
//   });
// }

// // A function to process data (returns a Promise)
// function processData(data) {
//   return Promise.resolve(data.toUpperCase()); // Simulated data processing
// }

// // Fetch data and chain the processing operation
// // fetchData()
// //   .then(data => {
// //     return processData(data);
// //   })
// //   .then((data) => {
// //     console.log("Data fetched successfully:", data);
// //     return data;
// //   })
// //   .catch((error) => {
// //     console.log("Error:", error.message);
// //   });


//   function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = "Sample data"; // Simulated data
//       // Resolve the Promise with the fetched data
//       resolve(data);
//       // Reject the Promise with an error if needed
//       // reject(new Error("Failed to fetch data"));
//     }, 2000); // Simulating a 2-second delay
//   });
// }

// function processData(data) {
//   return data.toUpperCase(); // Simulated data processing
// }

// async function fetchDataAsync() {
//   try {
//     const data = await fetchData();
//     console.log("Data fetched successfully:", data);

//     const processedData = processData(data);
//     console.log("Data processed successfully:", processedData);
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// fetchDataAsync();

function narcissistic(value) {
  // Code me to return true or false
  const numDigits = value.toString().length
  const digits = value.toString().split('');
  let sum = 0;
  console.log("Digits:", digits); console.log("numDigits:", numDigits);
  digits.forEach(element => {
    sum += parseInt(element) ** numDigits;
  });
  if (sum === value) {
    return true;
  }
  return false;
}

console.log(narcissistic(153)) ; // true