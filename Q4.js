/**
 * Closures => In js a Closure is a function that remembers the environment in which its was created even after the outer function has finished executing
 */

function outerFunction() {
    let outerVar = "hello i am Outer"
    function innerFunction() {
        console.log(outerVar);

    }
    return innerFunction
}
const closuresFunction =  outerFunction()
closuresFunction()


function counter (){
    let count = 0 ;
    return{
        increment :function(){
            count++
            return count
        },
        decrement : function(){
            count--
            return count
        },
        displayCount : function(){
            let message = `this is my counter value ${count}`
            return message
        }

    }
}

const myCounter = counter()

console.log(myCounter.displayCount());
console.log('increment',  myCounter.increment());
console.log(myCounter.displayCount());
console.log('decrement',  myCounter.decrement());
console.log(myCounter.displayCount());


