//felted Array
const arr = [2,4,[263456,3,6],0,7,65,34,[9,7,8,5]]

function faltedArr(arr){
    const ar = [];
 if(Array.isArray(arr)){
    arr.forEach(e=>{
        ar.push(...faltedArr(e))
    })

 }else{
    ar.push(arr)
 }
    
return ar
}
//console.log(faltedArr(arr))


//Check array is sort or not

const arrSort = [24,8,6,5,4,1]

let checkAcn = true;
let checkDcn=true;

for(let i = 1;i<arrSort.length;i++){
    if(arrSort[i]<arrSort[i-1]){
      checkAcn=false
     break
    }
}
for(let i = 1;i<arrSort.length;i++){
    if(arrSort[i]>arrSort[i-1]){
  checkDcn=false
       break
    }
}

// checkAcn||checkDcn?console.log(true):console.log(false)




// Reverse a string without using built-in functions

let str = "sunny"

let s= 0;
let e=0;
while(s<e){
    let tmp =str[s];
    str[s]=str[e];
    str[e]=tmp
    s++;
    e--;
}
console.log(str);
