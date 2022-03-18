window.addEventListener('load', function(){

//seleccion del formulario
let form = document.querySelector('.form')
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

//errores de los inputs
let errors_fullName = undefined;
let errors_email = undefined;
let errors_password = undefined;
let errors_confirm = undefined;
let errors_avatar = undefined;

//eventos para fullName

fullName.addEventListener('focus', function(e){
    if(fullName.value == ''){
        errors_fullName = 'Este campo debe estar completo';
    }else if( fullName.value.length < 2){
        errors_fullName = 'El usuario debe tener al menos 2 caracteres';  
        }
        if(errors_fullName != undefined){
            errorFN.innerHTML = "<p>" + errors_fullName + "</p>";
            fullName.style.borderColor = 'red';
        }
    });
fullName.addEventListener('change', function(e){
    if(fullName.value.length > 2){
        errorFN.innerHTML = "<p>" + " " + "</p>";
        fullName.style.borderColor = 'green';
    }
});
//eventos para email
email.addEventListener('focus', function(e){
    if(email.value == ''){
        errors_email= 'Este campo debe estar completo'
    }else if(/\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i.test(email.value) != true){
        errors_email = 'El email debe ser válido'
    }
    if(errors_email != undefined){
        errorEmail.innerHTML = "<p>" + errors_email + "</p>";
        email.style.borderColor = 'red';
    }
});
email.addEventListener('change', function(e){
    if(/\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i.test(email.value) == true){
        errorEmail.innerHTML = "<p>" + " " + "</p>";
        email.style.borderColor = 'green';
    }
})
//eventos para password
password.addEventListener('focus', function(e){
    if(password.value == ''){
        errors_password = 'Este campo debe estar completo'
    }else if(password.value.length <= 8){
        errors_password = 'La contraseña debe tener al menos 8 caracteres'   
    }
    if(errors_password != undefined){
        errorPassword.innerHTML = "<p>" + errors_password + "</p>";
        password.style.borderColor = 'red'; 
    }
});
password.addEventListener('change', function(e){
    if(password.value.length > 7){
        errorPassword.innerHTML = "<p>" + " " + "</p>";
        password.style.borderColor = 'green';
    }
});
//eventos para confirmPassword
confirmPassword.addEventListener('focus', function(e){
    if(confirmPassword.value == ''){
        errors_confirm = 'Confirmar contraseña'
    }else if(password.value != confirmPassword.value){
        errors_confirm = 'Las contraseñas deben coincidir'
    }
    if(errors_confirm != undefined){
        errorConfirm.innerHTML = "<p>" + errors_confirm + "</p>";
        confirmPassword.style.borderColor = 'red';
    }
});
confirmPassword.addEventListener('change', function(e){
 if(password.value == confirmPassword.value){
        errorConfirm.innerHTML = "<p>" + " " + "</p>";
        confirmPassword.style.borderColor = 'green';
    }
})
//eventos para avatar
avatar.addEventListener('focus', function(e){
    if(avatar.value == ''){
        errors_avatar = 'Debe subir una imagen'
    }else if(/(.jpg|.jpeg|.png|.gif|bmp|tiff)$/i.test(avatar.value) != true){
        errors_avatar = 'Este archivo no es válido'
    }
    if(errors_avatar != undefined){
        errorAvatar.innerHTML = "<p>" + errors_avatar + "</p>";
        avatar.style.borderColor = 'red';
    }
});
avatar.addEventListener('change', function(e){
    if(/(.jpg|.jpeg|.png|.gif|bmp|tiff)$/i.test(avatar.value) == true){
        errorAvatar.innerHTML = "<p>" + " " + "</p>";
        avatar.style.borderColor = 'green';
    }
});
form.addEventListener('submit', function(e){
    e.preventDefault();
    let errores = {};
    if(Object.keys(errores).length > 0){
        console.log(errores)
    }else{
        form.submit();
    }
})
})
