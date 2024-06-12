/*function a1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hi");
        },3000);
})   
}


function a2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const t2=true;
            if(t2)
            {
                resolve("Task is completed");
            }
                else
                {
                    reject("You didn't complete the task");
                }
            resolve("Hello");
        },2000);
})   
}


function a3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("listen");
        },1000);
})   
}

function a4(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("boy");
        },3000);
})   
}

a1().then(value=>{
    console.log(value);
    return a2();
})
.then(value=>{
    console.log(value);
    return a3();
})
.then(value=>{
    console.log(value);
    return a4();
})
.then(value=>{
    console.log(value);
    console.log("All entries complete.");
})*/

//go to market
//buy fruits
//clean kitchen

function market(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const t1=true;
            if(t1)
                {
                    resolve("Go to market");
                }
            else{
                reject("You didn't go to the market");
            }
        }, 2000);
    })
}

function fruits(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const f1 = true;
            if(f1)
                {
                    resolve("Buy fruits from the market.");
                }
            else{
                reject("You didn't get the fruits.");
            }
        }, 1000);
    })
}

function clean(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const c1=true;
            if(c1)
                {
                    resolve("Clean the Kitchen.");
                }
            else{
                reject("You haven't cleaned the kitchen.");
            }
        }, 500);
    })
}

market().then(value=>{
    console.log(value);
    return fruits();
})
.then(value=>{
    console.log(value);
    return clean();
})
.then(value=>{
    console.log(value);
})
.catch(error=>{console.log(error);})