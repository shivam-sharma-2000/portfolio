const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended : true}))

app.get("/", function(req, res){
    res.sendFile(__dirname+"/home.html")
})

// app.post("/", function(req, res){
//     console.log(req.body)
//     var num1 = Number(req.body.num1);
//     var num2 = Number(req.body.num2);
//     res.send("result is "+ (num1+num2))
// })

// app.get("/result", function(req, res){
//     res.send("<h1>This is result page</h1>")
// })

app.listen(3000)