document.getElementById("b1").onclick=function(){
    var newName = document.getElementById("input").value;
    document.getElementById("heading").textContent=` Hello ${newName}`;
}