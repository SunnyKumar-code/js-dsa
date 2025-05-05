// call 
/**
 * Call => invokes the funtion immediately , with this set to Arg, and accepts argument one by one
 */
function cook(ing1,ing2,ing3){
    console.log(`${this.name} is having a meal with ${ing1},${ing2} & ${ing3}`);
    
}
const adam ={name:"Adam"}

cook.call(adam,"rise","potato","eater")

/**
 * Apply invokes the function immediately , with this set to thisArg , but takes argument as an array 
 */
cook.apply(adam,["rise","potato","eater"])

/**
 * Bind Returns a new function with this set to this Arg , and any preset argument, but doesn't invoke it immediately
 */
const bindToCook= cook.bind(adam,"rise","potato","eater")
bindToCook()

/**
 * diff btw
 * call=> Runs the function immediately , passing each argument separately
 * apply=> Runs the function immediately , passing arguments as an array
 * bind => Creates a new function with preset this and arguments , which you can call later 
 */