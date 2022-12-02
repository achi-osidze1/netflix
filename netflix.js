var inp = document.querySelector(".inp")
var btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
    if(inp.value != ""){
        inp.style.borderBottom = "2px solid green"
        localStorage.setItem("email",inp.value)
    }
    else{
        inp.style.borderBottom = "2px solid #e87c03"
    }
})



