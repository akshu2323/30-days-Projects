let ainput = document.querySelector("#password")
let btn = document.querySelector("button")
let stren = document.querySelector("#strenght")
let msg = document.querySelector("p")

ainput.addEventListener("input", () => {

    if(ainput.value.length > 0){
        stren.style.display = "block"
    }else{
        stren.style.display = "none"
    }

    
    if(ainput.value.length <= 4 && ainput.value.length > 0){
        stren.innerHTML = "Weak"
        stren.style.color = "red"
        ainput.style.borderColor = "red"
        msg.style.color = "red"
    }else if (ainput.value.length > 4 && ainput.value.length < 8){
        stren.innerHTML = "medium"
        stren.style.color = "Yellow"
        ainput.style.borderColor = "Yellow"
        msg.style.color = "yellow"
    }else if(ainput.value.length >= 8){
        stren.innerHTML = "Strong"
        stren.style.color = "Green"
        ainput.style.borderColor = "green"
        msg.style.color = "green"
    }else{
        stren.style.color = "white"
        ainput.style.borderColor = "white"
        msg.style.color = "white"
    }
})