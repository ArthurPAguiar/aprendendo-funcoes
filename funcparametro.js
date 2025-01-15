torrar("pão de forma")
torrar("pão integral")
function torrar(pao){
    console.log("Torrada feita com " + pao)
}
 console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
// Podemos passar mais de um parâmetro para a mesma função:

fazer("cajá", 5.49, "Arthur")

function fazer(suco, valor, nome = "Cliente"){ // Variével opcional deixar em último para dar certo
    console.log("Suco feito de " + suco)
    console.log("Quem pediu o suco foi " + nome)
    console.log("Valor do suco: R$" + valor)
}

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

fazer("cajá", undefined, 5.49)

function fazer(suco, nome = "Cliente", valor){ // Caso não queira mudar a opcional de lugar
    console.log("Suco feito de " + suco)
    console.log("Quem pediu o suco foi " + nome)
    console.log("Valor do suco: R$" + valor)
}