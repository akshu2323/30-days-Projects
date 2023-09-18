let a = document.getElementById("yc")
let b = document.getElementById("cc") 
let c = document.getElementById("res")
let d = document.querySelector("button")

d.addEventListener("click", function () {
    let x = Math.floor(Math.random()*3+1)
    console.log(x)
    if(x == 1){
        a.innerHTML = "Rock"
    }else if(x == 2){
        a.innerHTML = "Paper"
    }else{
        a.innerHTML = "scissor"
    }
})

d.addEventListener("click", function () {
    let x = Math.floor(Math.random()*3+1)
    console.log(x)
    if(x == 1){
        b.innerHTML = "Rock"
    }else if(x == 2){
        b.innerHTML = "Paper"
    }else{
        b.innerHTML = "scissor"
    }
})

d.addEventListener("click", function () {
    if(a.innerHTML == b.innerHTML){
        c.innerHTML = "Draw"
    }else if(a.innerHTML == "Rock" && b.innerHTML == "Paper"){
        c.innerHTML = "Computer Wins"
    }else if(a.innerHTML == "Paper" && b.innerHTML == "scissor"){
        c.innerHTML = "Computer Wins"
    }else if(a.innerHTML == "Paper" && b.innerHTML == "Rock"){
        c.innerHTML = "You Wins"
    }else if(a.innerHTML == "scissor" && b.innerHTML == "Paper"){
        c.innerHTML = "You Wins"
    }else if(a.innerHTML == "Rock" && b.innerHTML == "scissor"){
        c.innerHTML = "You Wins"
    }else{
        c.innerHTML = "Computer Wins"
    }
})