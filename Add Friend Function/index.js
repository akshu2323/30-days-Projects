let istatus = document.getElementById("cst")
let cbtn = document.querySelector("#btn")
let rbtn = 0

cbtn.addEventListener("click", function(){
    if(rbtn == 0){
        istatus.innerHTML = "Friends"
        cbtn.innerHTML = "Remove Friend"
        istatus.style.color = "green"
        cbtn.style.backgroundColor = "red"
        rbtn = 1
    }else{
        istatus.innerHTML = "Stranger"
        cbtn.innerHTML = "Add Friend"
        istatus.style.color = "red"
        cbtn.style.backgroundColor = "grey"
        rbtn = 0
    }
})