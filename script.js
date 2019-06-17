const fs = require('fs'); 

fs.readFile('./input.txt', (err, data) => {
    console.time("Santa's Challenge");
    const Senko = (JSON.stringify(data))
    const SenkoV2 = Senko.replace('{"type":"Buffer","data":[', "");
    const SenkoV3 = SenkoV2.replace(']}', "");
    const Holo = SenkoV3.split(",");
    if (err) {
        console.log('Error!!!! Please find out the problem and Fix It ASAP!!!!')
    }
    const SeibaUp = function() {
        let SubNumber = 0
        for (i=0; i< Holo.length; i++) {
            if (Holo[i] === "40") {
                SubNumber++;
            }
        }
        return SubNumber;
    }
    const SeibaNum = SeibaUp();
    const HoloNum = Holo.length - SeibaNum;
    const FinalAnswer = SeibaNum - HoloNum;
    console.log("Final Answer:", FinalAnswer)
    console.timeEnd("Santa's Challenge")

    console.log(Senko);
//     // console.log(SenkoV2);
//     // console.log(SenkoV3);
//     console.log("SeibaDown Number", SeibasNumber)
//     console.log("HolosNumber", HolosNumber)
//     // console.log(Holo)
//     console.log("Holo length", Holo.length)
//     console.log("SenkoV3 Length", SenkoV3.length)
})
