//"Validate balanced parentheses in an expression. ({[()]})"
let str ="({[()]})";
function valid(str){
let obj = {
    "[":"]",
    "{":"}",
    "(":")"
};
let stack=[];
for(let i of str){
   if(obj[i]){
    stack.push(obj[i])
   }else{
    if(stack.pop()!==i){
        return false
    }
   }
    
}
return stack.length === 0;
}

console.log(valid(str)); 

