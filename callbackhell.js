function a1(callback){
    setTimeout(()=>{
        console.log("Hi")
        callback();
    },3000);
}

function b1(callback){
    setTimeout(()=>{
        console.log("Hello")
        callback();
    },300);
}

function c1(callback){
    setTimeout(()=>{
        console.log("Listen")
        callback();
    },500);
}

function d1(callback){
    setTimeout(()=>{
        console.log("BBC")
        callback();
    },5000);
}

function e1(callback){
    setTimeout(()=>{
        console.log("News")
        callback();
    },4500);
}

//repeated callbacks make the code complex and unred=adable when the code gets larger. THIS IS CALLED CALLBACK HELL.

a1(()=>{
    b1(()=>{
        c1(()=>{
            d1(()=>{
                e1(()=>{
                    console.log("All tasks completed.");
                })
            })
        })
    })
})
