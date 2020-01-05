const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}


// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Leonardo',
    idade: 37,
    peso: 100,
    endereco: {
        logradouro: 'Av das Americas',
        numero: 1234,
    }
}

console.log(saudacao);
console.log(exec())
console.log(cliente);