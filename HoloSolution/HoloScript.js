const fs = require("fs");

//1 What floor does Santa end up on?
// ( => Should go up 1 floor
// ) => Should go down 1 floor

function question1() {
    fs.readFile('./Santa.txt', (err, data) => {
        const directions = data.toString();
        const directionsArray = directions.split("");
        console.log(directionsArray);
    })
}
question1();

//2 When does Santa first enter the basement?
