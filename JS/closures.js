
/*function parentFunc(){
    return null;
}
const val = parentFunc();
console.log(val); // null
//closures are functions that have access to their own scope, the outer function's scope, and the global scope. They are created when a function is defined inside another function, allowing the inner function to remember the environment in which it was created.
// This code defines a function `parentFunc` that returns `null`.
// It then calls this function and assigns the result to the variable `val`, which is logged to the console. The output will be `null` since that is what the function returns.
// This is a simple demonstration of a function returning `null` and how to log that value to the console. */



/*  function parentFunc(){
    return function childFunc(){
        console.log("Hi, I am child function");
    };
}

const val = parentFunc();
val();
// This code defines a function `parentFunc` that returns another function `childFunc`.
// When `parentFunc` is called, it returns `childFunc`, which is then assigned  to the variable `val`.
// When `val` is called, it logs "Hi, I am child function" to th
// console. This demonstrates how functions can return other functions, creating a closure.
// This is a simple demonstration of how to create and use closures in JavaScript.
// The output will be "Hi, I am child function" since that is what the child function
// logs when it is called.
// This code is a simple example of how to create and use closures in JavaScript. It defines a
// function `parentFunc` that returns another function `childFunc`. When `parentFunc` is
// called, it returns `childFunc`, which is then assigned to the variable `val`. Wh
// en `val` is called, it logs "Hi, I am child function" to the console. This demonstrates how functions can return other functions, creating a closure. */


/*//closures
function parentFunc() {
    const x = 49;
    return function childFunc(){
        console.log("Hi, I am child function");
        console.log(x);
    }
}
const val = parentFunc();
val();
// This code defines a function `parentFunc` that contains a variable `x` with the

    */

//

/*
function calculatePower(y){
    return function calc(x){
        return(x ** y);
    }
};

const calculate =  calculatePower(2);
console.log(calculate(4));
//output: 16
*/
