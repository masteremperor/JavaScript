//async function because functions called are not being executed in order.



function hello(callback){
    setTimeout(() => {
       console.log("Hello");
       callback();
    }, 3000);
}

function bye(){
    console.log("Byee");
}

hello(bye);