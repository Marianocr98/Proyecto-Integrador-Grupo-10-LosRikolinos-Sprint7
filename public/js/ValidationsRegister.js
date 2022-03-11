window.addEventListener('load', function(){

let form = document.querySelector('.form');
let fullName = document.querySelector('#fullName');
let errorFN = document.querySelector(".errorFN");
let email = document.querySelector('#email');
let errorEmail = document.querySelector(".errorEmail");
let password = document.querySelector('#password');
let errorPassword = document.querySelector(".errorPassword");
let confirmPassword = document.querySelector('#confirm');
let errorConfirm = document.querySelector(".errorConfirm");
let avatar = document.querySelector('#avatar');
let errorAvatar = document.querySelector(".errorAvatar");
let buton = document.querySelector('.buton');

buton.addEventListener('click', function(e){
    e.preventDefault();
    let errors = []

    //fullName
    if(fullName.value == ''){
        errors.fullName = 'Este campo debe estar completo'
    }else if( fullName.value.length < 2){
        errors.fullName = 'El usuario debe tener al menos 2 caracteres'   
        }
    //email
    if(email.value == ''){
        errors.email = 'Este campo debe estar completo'
    }else if(/\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i.test(email.value) != true){
        errors.email = 'El email debe ser válido'
    }
    //password
    if(password.value == ''){
        errors.password = 'Este campo debe estar completo'
    }else if(password.value.length <= 8){
        errors.password = 'La contraseña debe tener al menos 8 caracteres'   
        }
    //confirmPassword
    if(confirmPassword.value == ''){
        errors.confirmPassword = 'Confirmar contraseña'
    }else if(password.value != confirmPassword.value){
        errors.confirmPassword = 'Las contraseñas deben coincidir'
    }
    //avatar
    if(avatar.value == ''){
        errors.avatar = 'Debe subir una imagen'
    }else if(/(.jpg|.jpeg|.png|.gif|bmp|tiff)$/i.test(avatar.value) != true){
        errors.avatar = 'Este archivo no es válido'
    }

    if(Object.keys(errors).length >= 1){
        errorFN.innerText = (errors.fullName) ? errors.fullName : '';

        errorEmail.innerText = (errors.email) ? errors.email : '';

        errorPassword.innerText = (errors.password) ? errors.password : '';

        errorConfirm.innerText = (errors.confirmPassword) ? errors.confirmPassword : '';

        errorAvatar.innerText = (errors.avatar) ? errors.avatar : '';
    }else{
        form.submit();
    }
})

})
