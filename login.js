var form = document.querySelector("#form")

form.addEventListener('submit', event => {
    event.preventDefault()
})

var email = document.querySelector("#email")
var password = document.querySelector("#password")
var btn = document.querySelector(".btn")
var h6e = document.querySelector("#h6e")
var h6p = document.querySelector("#h6p")
var storedemail = localStorage.getItem("email")

email.addEventListener("click", function(){
    email.style.backgroundColor = "rgb(75, 75, 75)"
    password.style.backgroundColor = "#333"
})

password.addEventListener("click", function(){
    password.style.backgroundColor = "rgb(75, 75, 75)"
    email.style.backgroundColor = "#333"
})

btn.addEventListener("click", function(){
    if(email.value == "" || email.value != storedemail && password.value == ""){
        email.style.borderBottom = "2px solid #e87c03"
        password.style.borderBottom = "2px solid #e87c03"
        h6e.style.color = "#e87c03"
        h6p.style.color = "#e87c03"
        h6e.style.fontFamily = "sans-serif"
        h6p.style.fontFamily = "sans-serif"
        h6e.style.marginTop = "5px"
        h6p.style.marginTop = "5px"
        h6e.innerHTML = "Please enter a valid email or phone number"
        h6p.innerHTML = "Your password must contain between 4 and 60 characters."
    }

    if(email.value == storedemail){
        email.style.borderBottom = "2px solid green"
        h6e.style.display = "none"
    }

     if(password.value.length >= 4){
        password.style.borderBottom = "2px solid green"
        h6p.style.display = "none"
    }

    if(email.value == storedemail && password.value.length >= 4){
        window.location.href = "netflix.html"
    }
})