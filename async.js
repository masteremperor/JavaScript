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
async function f1(){
    try{
        const m1 = await market();
    console.log(m1);

    const f2 = await fruits();
    console.log(f2);

    const c1 = await clean();
    console.log(c1);
    }
    catch(error){
        console.error(error);
    }
}
f1();
