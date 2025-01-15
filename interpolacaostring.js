creatStringConnection("db_products", "Arthur", 7685)

function creatStringConnection(dataBase, name, pass){
    console.log(`connect:DBCONNECT;user=${name};pass:${pass};initial_database=${dataBase}`)
}