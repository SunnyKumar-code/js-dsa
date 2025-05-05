/**
 * Q1 .  higher order function => its a function takes an function argument and returns a function as result
 * Q2 . IIFE(Immediately invoked Function Expression) = > is a javaScript function that is defined and executed immediately after its created
 */


//regular function
greet()
function greet() {
    console.log("Hello world!!");
}


(function () {
    console.log("Hello i am your IIFE Function");

})();
 