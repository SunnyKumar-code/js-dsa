const arr=[1,5,7,8,8,9,16,35,55,85];
const accArr=[...arr]
accArr.sort((a,b)=>a-b)
const decArr=[...arr]
decArr.sort((a,b)=>b-a);

const checkArr=(arr,accArr)=>{
 for(let i = 0 ;i<arr.length;i++){
    if(arr[i]!==accArr[i]){
        return false
    }
 }
 return true
}
const checkdecArr=(arr,decArr)=>{
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i]!==decArr[i]){
            return false
        }
     }
     return true
}


checkArr(arr,accArr)||checkdecArr(arr,decArr)?console.log("true"):console.log("false");

let aceChecker = true;
let decChecker = true;

for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
        aceChecker = false;
    }
}

for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
        decChecker = false;
    }
}

aceChecker || decChecker ? console.log("true") : console.log("false");


