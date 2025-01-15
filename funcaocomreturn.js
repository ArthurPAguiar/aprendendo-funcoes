
let resultado = soma(5, 5)
console.log(`O resultado da soma é ${resultado}`)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}

// Foi gerada uma variável que vai receber o saída da função.
// Realizou a tranferência de dois valores para os parâmetros. 
// Criação de uma variável para armazenar a soma dos dois números.
// Instrução "return", na qual, finaliza a execução de uma função e especifica os valores que devem ser retornados.

// Função só pode retornar um valor ou um objeto.


// OUTRA OPÇÃO DE RETURN:
let resultado1 = soma(5, 10)
console.log(`O resultado da soma é ${resultado1}`)

function soma(numA, numB){
    return numA + numB
}

console.log("-==-=-=-=-=-=-=-=-=-=-")

// Exemplos
let userName = getFirstName("Arthur Parente de Aguiar", " ")
console.log(`Saja bem-vindo ${userName}`)

userName = getFirstName("Ana-Leticia-dos-Reis-Costa", "-")
console.log(`Saja bem-vinda ${userName}`)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}