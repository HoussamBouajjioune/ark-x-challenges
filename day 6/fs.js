// fs.js
const fs = require('fs').promises;

function readFileAsync(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file from disk: ${err}`);
        } else {
            console.log(`File content: ${data}`);
            return data;
        }
    });
}

// function readFileAsync2(path, callback) {
//     fs.readFile(path, 'utf8', (err, data) => {
//         if (err) {
//             console.error(`Error reading file from disk: ${err}`);
//         } else {
//             console.log(`File content: ${data}`);
//             callback(data);
//         }
//     });
// }


 function readFileAsync2(path) {
  try {
    const data =  fs.readFile(path, 'utf8');  // pass encoding as 2nd arg
    console.log(`File content: ${data}`);
    return data;
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`);
    throw err;
  }
}


module.exports.readFileAsync = readFileAsync;

function writeFileAsync(path, content) {

    fs.writeFile(path, content, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing file to disk: ${err}`);
        } else {
            console.log('File written successfully');
        }
    });
}

module.exports.writeFileAsync = writeFileAsync;


// async function processFiles(...files) {
//     let data = '';
//     files.forEach(file => {
//         readFileAsync2(file, (content) => {
//             data = content.split('').reverse().join('');
//             const timestamp = new Date().toISOString();
//             const processed = `${timestamp}\n${data.toUpperCase()}`;
//             console.log(`Processed data: ${processed}`);
//         });
//     })
// }

async function processFiles(...files) {
  for (const file of files) {
    const content = await readFileAsync2(file);
    const reversed = content.split('').reverse().join('');
    const timestamp = new Date().toISOString();
    const processed = `${timestamp}\n${reversed.toUpperCase()}`;
    console.log(`Processed data: ${processed}`);
  }
}

module.exports.processFiles = processFiles;