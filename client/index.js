let hide = document.querySelectorAll(".text-hide")
let plusbtn = document.querySelectorAll(".plus-image")

for (let i = 0; i < hide.length; i++) {
    hide[i].style.display = "none"
}

plusbtn.forEach(function(button, index) {
   button.addEventListener("click", function(){
   
    hide.forEach(function(text, textIndex){
        if (index === textIndex) {
        if (text.style.display === "none") {
            text.style.display = "block"
            button.src = "./assets/images/icon-minus.svg"
        } else if (text.style.display === "block") {
            text.style.display = "none"
            button.src = "./assets/images/icon-plus.svg"
        }
    }
    })
  
   })
  
})