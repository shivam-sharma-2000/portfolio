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

        // var imgItem = document.getElementsByClassName("row openImage").children[0];
        const elements = document.querySelectorAll('.openImage');
        
        elements.forEach(element => {
            console.log(element.src);
            element.addEventListener("click", () =>  {
                document.getElementById("big-image-container").children[0].src = element.src;
                document.getElementById("big-image-container").style.display = "flex";
                document.getElementById("big-image-container").style.justifyContent = "center";
            })
          });



        // console.log(imgItem)
        // for(var i=0; i<imgItem.length; i++){
        //     console.log(imgItem.children[i].children[0].src);
        //     imgItem.children[i].children[0].addEventListener("click", () => {
        //         document.getElementById("big-image-container").children[0].src = srcImg;
        //         document.getElementById("big-image-container").style.display = "flex";
        //         document.getElementById("big-image-container").style.justifyContent = "center";
        //     })
        // }
        
    }
});

const certificateModal = document.getElementById('certificateModal');
  certificateModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget; // Button that triggered the modal
    const imageSrc = button.getAttribute('data-img');
    const title = button.getAttribute('data-title');

    // Update modal content
    const modalImage = certificateModal.querySelector('#modalCertificateImg');
    const modalTitle = certificateModal.querySelector('#certificateModalLabel');
    const downloadLink = certificateModal.querySelector('#downloadCertificate');

    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    downloadLink.href = imageSrc;
  });




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


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid #000}";
    document.body.appendChild(css);
};