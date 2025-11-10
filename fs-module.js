const fs = require('fs');

fs.readFile('./contents/doc1.txt','utf8',(err, result) => {
    if(err) {
        console.log(err)
    }
    const first = result;
    fs.readFile('./contents/doc2.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
        }
        const second = result;
        fs.writeFile('./contents/doc3_1.txt',
            `Here is the result: ${first}, ${second}`,(err, result) => {
                if(err) {
                    console.log(err)
                }
                else console.log("File doc3_1 has been written");
            }
        )
    })
})


