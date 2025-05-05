/**
 * Curring => Curring is a concept in Functional programming where a function that takes multiple arguments in transformed into a sequence of functions ,each accepting a single argument
 * Curring is used because its make your code more flexible and reusable
 */


function double(a){
    return function(b){
        return a*b
    }
}
console.log(double(2)(3));
