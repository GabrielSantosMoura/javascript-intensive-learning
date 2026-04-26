let space = "";
for(let i = 1; i<20; i++){
    if(i%2 === 0){
        space += i;

    if(i<20){
        space +=   ","
    }
    }
}

console.log(space);