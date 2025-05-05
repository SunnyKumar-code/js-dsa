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
let e=str.length-1;
let strArr = str.split(''); 
while(s<=e){
    let tmp =strArr[s];
    strArr[s]=strArr[e];
    strArr[e]=tmp
    s++;
    e--;
}
str=strArr.join("")
//console.log(str);


//2nd approach
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

//console.log(reversed);

//Find the largest and smallest number in an array
const arrl = [24,8,6,5,4,1]
let min = Infinity;
let max=-Infinity;
for(let i of arrl){
    min = Math.min(min,i)
    max=Math.max(max,i)
}
//console.log("Iam the max Value:",max );
//console.log("Iam the min Value:",min );

// Remove duplicates from an array
const dubArr = [3,4,3,6,8,9,0,2]
let set = new Set(dubArr)
//console.log(set);
let ansarr =[...set]
//console.log(ansarr);



const ans=[]

for(let i = 0 ; i <dubArr.length;i++){
    let count = 0 ;
    for(let j = i+1 ; j<dubArr.length;j++){
        if(dubArr[i]===dubArr[j]){
            count++
        }
    }
    if(count===0){
        ans.push(dubArr[i])
    }
}
//console.log(ans);




// Find the first non-repeating character in a string.
let checkRepeat = "sshhkkdkjrkjr";
// for(let i = 0 ; i<checkRepeat.length ; i++){
//     count = 0;
//     for(let j = 0 ; j <checkRepeat.length;j++){
//         if(checkRepeat[i]===checkRepeat[j])count++
//     }
//     if(count===1)return console.log(checkRepeat[i])
// }

// let map={}
// for(let i of checkRepeat){
//     map[i]=(map[i]||0)+1
// }
// for(let i of checkRepeat){
//     if(map[i]===1)return console.log(i)
// }


//Implement a function to check if two strings are anagrams

let s1="madam"
let s2 ="mamad"

function anagram(s1,s2){
    let maps1={}
    let maps2={}
    
    for(let i of s1){
        maps1[i]=(maps1[i]||0)+1
    }
    for(let i of s2){
        maps2[i]=(maps2[i]||0)+1
    }
    
    for(let k in maps1){
        if(maps1[k]!==maps2[k])return false    
    }
    for(let k in maps2){
        if(maps1[k]!==maps2[k])return false    
    }
    return true
}
//console.log(anagram(s1,s2));


//Find the maximum sum of a subarray of size k

const arr3 = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const k = 3;

let sum=0;

let start= 0;
let end = k;
while(end<arr3.length){
    let ar = arr3.slice(start,end);
    let add = ar.reduce((p,c)=>p+c);
    sum = Math.max(sum,add)
    start++;
    end++;
    
}
//console.log(sum);

//Move all zeros to the end of an array
const arr4 = [1, 0, 2, 0, 0, 3, 4]

let pos = 0 ;
for(let i=0;i<arr4.length;i++){
    if(arr4[i]!==0){
        arr4[pos]=arr4[i]
        pos++
    }
}

for(let i =pos ; i<arr4.length;i++){
    arr4[i]=0
}
console.log(arr4);

let str1 = "racea"

let check=false
for(let i=0;i<str1.length;i++){
 
    for(let j = str1.length;j>i;j--){
        let str = str1.substring(i,j)
        if(str.length>=2 && isPalimdram(str)){
          check=true
          break
        }
    }
    if (check) break;
}

function isPalimdram(str){
   let s= 0;
   let e =str.length-1
   while(s<e){
    if(str[s]!==str[e])return false
    s++
    e--
   }
   return true
}
//console.log(check);

// Find the element that appears more than n/2 times

const arr5 =  [2, 2, 1, 2, 2]
function mejortyEle(arr){
    const n = arr.length/2
    let map ={}
    for(let i of arr){
        map[i]=(map[i]||0)+1
    }
    for(let i in map){
        if(map[i]>n/2)return i
    }
    return -1
}

console.log(mejortyEle(arr5))
