const prompt = require("prompt-sync")();

let age =  Number(prompt("How old are you? "));

if (age >= 18){
    console.log("You´re of age!");
} else if(age <= 0){
    console.log("Are you kidding me?");
} else{
    console.log("You´re underage!");
}
