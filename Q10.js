/**
 * Reduce => the reduce( method in js is used to reduce an array to a single value by applying a function on each element in the array)
 */

const arr = [2,5,4,6,8]

const sum = arr.reduce((acc,cur)=>{
    return acc+cur
},0)
console.log(sum);
