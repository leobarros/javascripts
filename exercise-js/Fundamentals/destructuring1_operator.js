// new resource from ES2015

const person = {
    name: 'Leonardo',
    age: 38,
    address: {
        street: "Mercado's Street",
        number: 300
    }
}

const { name, age} = person
console.log(name, age)

const {name: n, age: a} = person
console.log(n, a)

const { lastname, mood = true} = person
console.log(lastname, mood)

const { address: { street, number, zipcode }} = person
console.log(street, number, zipcode)