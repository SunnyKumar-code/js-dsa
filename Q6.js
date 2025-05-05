/**
 * promises => Promises handle asynchronous tasks in JavaScripts by providing a more readable and structured approach than callback for handling outputs
 * 
 * it has three stage
 *      1. pending 
 *      2. Fulfilled
 *      3. Rejected
 */

const Data = {name:'sunny',age:23}

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(Data); 
        },2000)
    })
}
fetchData().then(
    data=>{
        console.log("Data:",data);  
    }
).catch(err=>{
    console.log("Error:",err);
    
})
