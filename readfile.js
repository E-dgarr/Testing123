const fs = require('fs');

console.log("Starting to read doc1.txt file...");
fs.readFile('./contents/do1.txt','utf8',(err, result) => {
    if(err) {
        console.log("Error detected:", err)
    }
    else console.log("Finished reading doc1.txt file.");
});

console.log("Starting to read doc2.txt file...");