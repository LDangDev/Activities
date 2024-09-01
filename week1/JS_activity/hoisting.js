// console.log(square(2))

// function declaration
// function square(x) {
//     return x * x;
//   }

// function expression
// const square = function(x) {
//     return x * x;
//   };
// console.log(cube(5))

// const cube = function(x) {
//     return x * x *x
// }

// const fullName = function(first, last) {
//     return first + " " + last
// }

// const power = function(base, exp){
//     if (exp === 0) {
//         return 1
//     }
//     return base * power(base, exp - 1)
// }

// const sumCubes = function(numbers) {
//     let total = 0
//     for (let i = 0; i < numbers.length; t++){
//         total = total + cube(numbers[i])
//     }
//     return total
// }

// console.log(cube(5))

// Mechanics of hoisting
// 1. when the code runs, the declare of variable message will be moved to the top, but without the assigned value, that's why output is undefined
// 2. Because let and const does not hoist so it will throw an error
// console.log(message)
// var message = "Hello"
// 3. when the code is executed, it will print what is returned from the expression function showMessage,
// However, the expression function does not hoist so it will throw an error

// console.log(showMessage());

// const showMessage = function(){
//   return 'Hi there!';
// };
// 4. because the function showMessage will be hoisted to the top, so it can be referenced even define after the console.log

// 1.
// let values = [10, 20, 30];

// for(let i = 0; i < values.length; i++){
//   console.log(values[i]);
// }
// 2.
let lastLogin = '1/1/1970';

function welcome(first, last) {
    return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};

console.log(welcome('Charlie', 'Munger'));


