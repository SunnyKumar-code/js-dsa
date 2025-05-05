const arr =[1,5,23,2,1,5,85,6,3,2]
const map = {}
for(let i of arr){
    map[i]=(map[i]||0)+1
}
console.log(map);
