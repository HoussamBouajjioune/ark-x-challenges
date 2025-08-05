const file = require('./fs');


// try {
//     // Call the async function
//     await file.processFiles('./example.txt', './txt1.txt', './txt2.txt', './txt3.txt');

//     console.log('All files processed successfully!');
// } catch (error) {
//     console.error('An error occurred:', error);
// }


const myPromise = async () => {
    try {
        await file.processFiles('./example.txt', './txt1.txt', './txt2.txt', './txt3.txt');
        console.log('All files processed successfully!');
    } catch (error) {
        console.error('Error processing files:', error);
    }
};

myPromise()






