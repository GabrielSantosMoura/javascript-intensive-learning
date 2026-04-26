const prompt = require("prompt-sync")();

let number = Number(prompt("Type any number: "));

if (number > 0 ){
    console.log("The number is positive!");
} else if (number === 0){
    console.log("The number is neutral!");
} else{
    console.log("The number is negative!");
}