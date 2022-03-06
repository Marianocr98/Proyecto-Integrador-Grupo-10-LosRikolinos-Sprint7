window.onload = function(){


let form = document.querySelector('.form');
let fullName = document.querySelector('#fullName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm');


 fullName.addEventListener("focus",function(){console.log("1")})


form.addEventListener('submit',function(e){
    e.preventDefault()
})

}