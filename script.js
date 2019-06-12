var master_number = 0;

const fs = require('fs'); 

fs.readFile('./input.txt', (err, data) => {
    const Senko = (JSON.stringify(data))
    // const Holo = Senko.split(", ");
    if (err) {
        console.log('Error!!!! Please find out the problem and Fix It ASAP!!!!')
    }
    // console.log(Holo)
    // console.log(Holo.length)
})