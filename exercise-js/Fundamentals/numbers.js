const weight = 1.0
const weight2 = Number('2.0')

console.log(weight, weight2)
console.log('The variable weight is a interger? ' + Number.isInteger(weight))
console.log('The variable weight2 is a interger? ' + Number.isInteger(weight))

const number1 = 9.871
const number2 = 6.871

const total = number1 * weight + number2 * weight2
const mean = total / (weight + weight2)

console.log(mean.toFixed(2))
console.log(mean.toString(2)) //binary
