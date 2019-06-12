var master_number = 0;

const fs = require('fs'); 

fs.readFile('./input.txt', (err, data) => {
    console.log(JSON.stringify(data))
    if (err) {
        console.log('Error!!!! Please find out the problem and Fix It ASAP!!!! - Sen')
    }
})