const express = require("express")
const app = express()
const firstNames = ["Harry", "John", "Tumba", "Rocker"]
const lastNames = ["Jones", "Stevesson", "Fire", "Pro"]

const superVillians = {villians: [{name: "John wayne", city: "GBG"}, {name: "tripack", city: "Chicago"}]}
const port = process.env.PORT || 3000

app.get("/superheroes", (req, res) => {
    res.send(superVillians)
} )

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get("/newentry", (req, res) => {
    newEntryInc()
    res.send("Added data")
})

function newEntryInc(){
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const randomLastNames = lastNames[Math.floor(Math.random() * lastNames.length)]
    const newName = randomFirstName + " " + randomLastNames
    superVillians.villians.push({name: newName, city: "spawnling"})
    return superVillians
}

app.listen(port, () => {
    console.log("listening to 3000 " + port)
})