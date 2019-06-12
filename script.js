var master_number = 0;

const fs = require('fs'); 

fs.readFile('./input.txt', (err, data) => {
    const Senko = (JSON.stringify(data))
    const SenkoV2 = Senko.replace('{"type":"Buffer","data":[', "");
    const SenkoV3 = SenkoV2.replace(']}', "");
    const Holo = SenkoV3.split(",");
    if (err) {
        console.log('Error!!!! Please find out the problem and Fix It ASAP!!!!')
    }
    // console.log(Senko);
    // console.log(SenkoV2);
    // console.log(SenkoV3);
    console.log(Holo)
    console.log("Holo length", Holo.length)
    console.log("SenkoV3 Length", SenkoV3.length)
})
