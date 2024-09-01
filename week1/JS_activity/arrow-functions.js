const sayHello = () => "Hello, world!"
const double = (x) => x*2
const add = (x, y) => x + y

const person = {
    name: "Alice",
    sayHi: () => "Hi, " + this.name + "!"
}

const numbers = [1, 2, 3, 4, 5]

const doubled = []
numbers.forEach(num => doubled.push(num * 2))
console.log(numbers)
console.log(doubled)