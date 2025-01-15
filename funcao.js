torrar()


function torrar(){
    console.log("Torrando pão")
    injetarPao()

}

function injetarPao(){
    console.log("Preparando para injetar o pão")
    console.log("Finalizado")
}

// Construcao de functions:

main()

function main(){ //FUNÇÃO PARA CHAMAR OUTRAS FUNÇÕES
    getData()
    checkValues()
    sendToData()
}

function getData(){
    console.log("Pegando dados cadastrais")
}

function checkValues(){
    console.log("Verificando os dados inseridos")
}

function sendToData(){
    console.log("Enviando para o banco de dados")
}