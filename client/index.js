let hide = document.querySelectorAll(".text-hide")
let plusbtn = document.querySelectorAll(".plus-image")
let question = document.querySelectorAll(".question-text")

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

question.forEach(function(questionText, index) {
    questionText.addEventListener("click", function() {
        let answer = questionText.parentElement.nextElementSibling;
        if (answer.style.display === "none") {
            answer.style.display = "block";
            plusbtn[index].src = "./assets/images/icon-minus.svg";
        } else {
            answer.style.display = "none";
            plusbtn[index].src = "./assets/images/icon-plus.svg";
        }
    });
});
        