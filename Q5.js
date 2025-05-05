//setTime out
setTimeout(()=>{
console.log("Hello i am SetTimeOut and i am printing some delay of time");

},2000)

//setInterval
 const  timerId =  setInterval(()=>{
    console.log('hello i am setInterval and i am printing every period of time');
    
},2000)

setTimeout(()=>{
    clearInterval(timerId)

},6000)