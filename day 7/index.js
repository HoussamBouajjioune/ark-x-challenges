// Fetch User Data from the API
const fetchUserData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/users');
    console.log('Response Status:', response); // Log the response status
    const { users } = await response.json(); // Destructuring to get the users array

    // Process user data
    const processedData = processUserData(users);

    // Summarize age of male users
    const totalMaleAge = summarizeAge(users);

    // Display results
    console.log("Filtered and Mapped Users (Not Male):");
    console.log(processedData);

    console.log("\nTotal Age of Male Users:");
    console.log(totalMaleAge);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

// Process user data: filter non-male and map to formatted string
const processUserData = (users) =>
  users
    .filter(({ gender }) => gender !== 'male') // filter out males
    .map(({ firstName, lastName, age }) => `Name: ${firstName} ${lastName}, Age: ${age}`);

// Summarize total age of male users using reduce
const summarizeAge = (users) =>
  users
    .filter(({ gender }) => gender === 'male')
    .reduce((total, { age }) => total + age, 0);

// Run the main function
fetchUserData();


function setReducer(input) {
  let output = []; // Initialize output with the first element of input
  let element = input[0]; // Store the first element of input
  let elementcount = 1; // Store the first element of input
  for (let i = 1; i <= input.length; i++) {
    if (input[i] === element) {
      elementcount++ // If current element is same as previous, carry forward the value
    }
    else {
      output.push(elementcount); // Set count for new element
      element = input[i]; // If current element is different, update element      
      elementcount = 1; // Reset count for new element
    }
  }

  if (output.length === 1) {
    return output;
  }

  return setReducer(output); // Recursive call with the output array

}


// console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]))

function digitalRoot(n) {
    do {
        let strnumber = n.toString();
        let num2 = 0;
        for (let i = 0; i < strnumber.length; i++) {
            num2 += Number(strnumber[i]);
        }
        n = num2
    } while (n > 10)
    return n;
}


console.log(digitalRoot(650557)); // Example usage of digitalRoot function

let sum = (a, b) => {return  a + b}
 
console.log(sum(5, 10)); // Example usage of sum function





