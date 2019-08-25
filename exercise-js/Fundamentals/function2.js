// store a function in a variable.

const printSum = function(a, b) {
    console.log(a + b)
}

printSum(2, 3)

// store an arrow function in a variable.

const sum = (a, b) => {
    return a + b
}

console.log(sum(2, 3))

// implicit return

const subtraction = (a, b) => a - b
console.log(subtraction(5,4));