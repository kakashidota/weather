//1. Förklara varför vi behöver Apis
/*
APIs, or application programming interfaces, are used to allow different software 
systems to communicate with each other. They provide a way for different programs to access
the functionality and data of other systems, without needing to know the underlying
 implementation details. This allows for greater flexibility and reusability of code, 
 as well as the ability to easily integrate different systems and services. 
 Additionally, APIs can also be used to expose the functionality of a system to external 
 developers, enabling them to build new applications that leverage the capabilities of the 
 underlying system.
*/

//2. Förklara Endpoints, Paths och parametrar
//3. Navigera till sv443.net/jokeapi/v2 och förklara paths och parametrar
//4. Navigera till openweathermap och &units=metric
//5. Förklara JSON
//6. Skapa en weatherApp
//8. Imptera HTTPs paketet


const { json } = require("body-parser")
const express = require("express")
const app = express()
const https = require("https")

app.get("/", (req, res) => {
    //7. Skapa en get request och till openweather map och hämta info
    let url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=13b0fc9d23faa8a6317c5de1d3455c85&units=metric"
    https.get(url, function(response){
        console.log(response.statusCode)
        // res.send("Server is up and running")

        //9. Filtrera responsen
        response.on("data", (data)=>{
            console.log(data)
            const weatherData = JSON.parse(data)
            console.log(weatherData)

            //10. Printa ut temperatur och annan info
            const temp = weatherData.main.temp
            console.log(temp)
            const weatherDescription = weatherData.weather[0].description
            console.log(weatherDescription)
            //12.Lägg till ikonen
            const icon = weatherData.weather[0].icon
            const imageUrl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
            //11. Skicka tillbaka infon till vår sida
            res.write("<h1>The tempreature in X is " + temp + " celsiuc</h1>")
            res.write("<p>The weather is currently" + weatherDescription + "</p> ")
            res.write("<img src="+imageUrl+">")
            res.send()
        })
    })

})

//13. Skapa HTML filen

//14. bryt ut koden och gör klart.
// const bodyParser = require("body-parser")
// app.use(bodyParser.urlencoded({extended:true}))

// app.get("/", (req, res) => {
//     res.sendFile(__dirname  + "/index.html")
// })

// app.post("/", (req, res) => {

//     const query = req.body.cityName
//     const apiKey = "13b0fc9d23faa8a6317c5de1d3455c85"
//     const unit = "metric"
//     let url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units="+ unit
//     console.log(url)
//     https.get(url, function(response){
//     response.on("data", (data)=>{
//         const weatherData = JSON.parse(data)
//         console.log(weatherData)
//         const temp = weatherData.main.temp
//         const weatherDescription = weatherData.weather[0].description
//         const icon = weatherData.weather[0].icon
//         const imageUrl = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
//         res.write("<h1>The tempreature in X is " + temp + " celsiuc</h1>")
//         res.write("<p>The weather is currently" + weatherDescription + "</p> ")
//         res.write("<img src="+imageUrl+">")
//         res.send()
//     })
// })
// })


app.listen(3000, function(){
    console.log("listening to 3k")
})