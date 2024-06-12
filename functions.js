/*function newFunc(name1,age){
    console.log(`HI ${name1}`);
    console.log(`your age is ${age}`);
}

newFunc('abc',45);*/

/*
const max=100;
const min = 50;


var a = Math.floor(Math.random()*max)+min
consoe.log(a);

*/ 

const min = 1;
const max =100;
const answer = Math.floor(Math.random()*(max-min+1))+min;
let guess;
let attempts=0;
let running=true;

while(running){
    guess = parseInt(window.prompt(`Enter a number between ${min} to ${max}`));
    if(isNaN(guess))
    {
       window.alert("Enter a valid number!");
    }
    if(guess>max || guess<min)
    {
        window.alert("Enter a number between specified range.");
    }
    else
    {
        attempts++;
        if(guess<answer)
        {
            window.alert("Oops! The guess was incorrect! Enter a higher number.");
        }
        else if(guess>answer)
        {
            window.alert("Oops! The guess was incorrect! Enter a lower number.");
        }
        else if(guess==answer){
            window.alert(`Yippeee! You've answered the number correctly. You took ${attempts} guesses.`);
            running=false;
        }
    }

}