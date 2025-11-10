const fs = require('fs');

const first = fs.readFileSync('./contents/doc1.txt', 'utf8');
const second = fs.readFileSync('./contents/doc2.txt', 'utf8');

const joined = fs.writeFileSync(
    './contents/doc3.txt',
    `Here is the result: ${first}, ${second}`
);



