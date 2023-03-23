// window.onload = (event) => {
//     console.log('The page has fully loaded');

//     document.getElementById("big-image-button").onclick(() => {
//         console.log("hello");
//         document.getElementById("big-image-container").style.display = "none";
//     })
// };

window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');
    console.log(window.innerWidth);
    if(window.innerWidth >= 800)
    {    
        document.getElementById("big-image-button").addEventListener("click", () => {
            document.getElementById("big-image-container").style.display = "none";
        })

        var imgItem = document.getElementsByClassName("openImage");
        console.log(imgItem)
        for(var i=0; i<imgItem.length; i++){
            var srcImg = imgItem[i].src;
            imgItem[i].addEventListener("click", () => {
                document.getElementById("big-image-container").children[0].src = srcImg;
                document.getElementById("big-image-container").style.display = "flex";
                document.getElementById("big-image-container").style.justifyContent = "center";
            })
        }
        
    }
});

function openImage(img){    
    document.getElementById("big-image-container").children[0].src = img;
    document.getElementById("big-image-container").style.display = "flex";
    document.getElementById("big-image-container").style.justifyContent = "center";
}  

function closeImage(){
    // console.log("hello");
    document.getElementById("big-image-container").style.display = "none";
}






// const express = require("express")
// const bodyParser = require("body-parser")

// const app = express()
// app.use(bodyParser.urlencoded({extended : true}))

// app.get("/", function(req, res){
//     res.sendFile(__dirname+"/home.html")
// })

// // app.post("/", function(req, res){
// //     console.log(req.body)
// //     var num1 = Number(req.body.num1);
// //     var num2 = Number(req.body.num2);
// //     res.send("result is "+ (num1+num2))
// // })

// // app.get("/result", function(req, res){
// //     res.send("<h1>This is result page</h1>")
// // })

// app.listen(3000)