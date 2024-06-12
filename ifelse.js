let age=0;
const b1 = document.getElementById("b1");

b1.onclick=function(){
    var newName=document.getElementById("input").value;
    if(newName>=18 && newName<=100)
    {
        window.alert("You are eligible to vote.");
    }
    else if(newName>100){
        window.alert("You are too old to vote!");
    }
    else if(age<18){
        window.alert("Sorry you're not eligible to vote.")
    }
    else{
        window.alert("Please enter valid age!");
    }
}