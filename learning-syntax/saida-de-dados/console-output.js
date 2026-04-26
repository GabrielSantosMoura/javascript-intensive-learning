/*Como printar em Js e meter um input(tem que colar esses comandos no terminal antes: npm init -y
npm install prompt-sync):*/

console.log("BORA PRA CIMA 🔥");

const prompt = require("prompt-sync")();

let nome = prompt("Qual é o teu nome? ");
console.log("Fala " +nome+ " 🔥" );

