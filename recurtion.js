const arr = [5,6,8,9,4]
// function multiply(arr){
//     let product = 1;
//     for(let i=0;i<arr.length;i++){
//         product*=arr[i]
//     }
//     return product
// }
 function multiply(arr){
    console.log(arr);
    
    if(arr.length<=0)return 1
    else return arr[arr.length-1]*multiply(arr.slice(0,arr.length-1))
 }

console.log(multiply(arr));

function factorial(n){
   
    
    if(n<=0)return 1
else return n*factorial(n-1)
}
console.log(factorial(5))


let array = [2,5,3,[5,1,0],5,[6,6,8,9,5]];

function flat(arr){
    const ar=[]
    if(Array.isArray(arr)){
        arr.forEach((e)=>{
            ar.push(...flat(e))
        })
    }else{
        ar.push(arr)
    }
    return ar
}
console.log(flat(array));
