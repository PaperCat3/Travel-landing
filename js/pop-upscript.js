const header = document.querySelector(".pop-up_header")
const button = document.querySelectorAll(".pop-up_button")
const or = document.querySelector(".pop-up_line-or")
const forgot = document.querySelector(".forgot")
const form = document.querySelector(".pop-up_form")
const textBottom = document.querySelector(".pop-up_text_bottom")
const register = document.querySelector(".pop-up_register")
let email = document.querySelector('#email')
let password = document.querySelector('#password')
const formButton = document.querySelector(".Form_button")
const login = document.querySelector(".button-login")

let num = 0


function regPopup () {
   if (num==0){
   header.textContent = "Create account"
   button.forEach(function(element) {
      element.style.display = 'none';
   });
   or.style.display = "none"
   forgot.style.display = "none"
   form.style.marginBottom = "20px"
   textBottom.textContent = "Already have an account?"
   register.textContent = "Log in"
   num = 1
} else if (num==1){
   header.textContent = "Log in to your account"
   button.forEach(function(element) {
      element.style.display = 'block';
   });
   or.style.display = "flex"
   forgot.style.display = "block"
   form.style.marginBottom = "10px"
   textBottom.textContent = "Don’t have an account?"
   register.textContent = "Register"
   num=0
}
}

register.addEventListener('click' , regPopup)

function alertForm () {
   alert(`${email.value} \n ${password.value}`)
}
formButton.addEventListener('click' , alertForm)

