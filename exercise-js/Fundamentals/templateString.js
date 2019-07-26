const name = "Leonardo";
const concact = 'Hello ' + name + '!';

const template = `
  Hello
    ${name}!`

console.log(concact, template)

let classes = "Math"
let university = "MIT"

let greetUniversity = `Hello ${name}! Welcome to ${university} and your ${classes} class.`
console.log(greetUniversity)

console.log(`5 + 5 = ${5 + 5}`)

const up = text => text.toUpperCase()
console.log(`Hey... ${up('atention')}!`)
