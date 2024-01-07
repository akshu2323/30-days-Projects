let body = document.querySelector('body');
let buttons = document.querySelectorAll('.button');

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click', (e)=>{
        console.log(e)
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;
            console.log(e.target.id)
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
    })
})

/*
Method No :2;
let body = document.querySelector('body');
let greyChanger = document.querySelector('#grey');
let whiteChanger = document.querySelector('#white');
let blueChanger = document.querySelector('#blue');
let yellowChanger = document.querySelector('#yellow');

greyChanger.addEventListener("click", () => {
    body.style.backgroundColor = "grey";
    body.style.color = "white";
})

whiteChanger.addEventListener("click", () => {
    body.style.backgroundColor = "white";
    body.style.color = "black";
})

blueChanger.addEventListener("click", () => {
    body.style.backgroundColor = "blue";
    body.style.color = "white";
})

yellowChanger.addEventListener("click", () => {
    body.style.backgroundColor = "yellow";
    body.style.color = "black";
})*/