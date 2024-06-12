let count=0;
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");

b1.onclick=function(){
    count--;
    document.getElementById("l1").textContent=count;
}

b2.onclick=function(){
    count++;
    document.getElementById("l1").textContent=count;
}

b3.onclick=function(){
    count=0;
    document.getElementById("l1").textContent=count;
}