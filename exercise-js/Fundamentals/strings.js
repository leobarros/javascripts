const name = "Leonardo"

console.log(name.charAt(0))
console.log(name.charAt(1))
console.log(name.charAt(2))

console.log('O in UNICODE table: ', name.charCodeAt(2))
console.log(name.indexOf('2'))
console.log(name.substring(1))
console.log(name.substring(0, 3))
console.log('My name is: '.concat(name).concat("!"))
console.log(name.replace('o', 0))

console.log('Leonardo, Sabrina, Mariana'.split(','))
