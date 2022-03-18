window.addEventListener('load', function(){
//seleccion del form, inputs y divs de errores
    let form = document.querySelector('.form')  
    let logEmail = document.querySelector('#nombre');
    let errorEmail = document.querySelector(".errorEmail");
    let password = document.querySelector('#password');
    let errorPassword = document.querySelector(".errorPassword");
//errores de los inputs
    let errors_email = undefined;
    let errors_password = undefined;
//eventos para email   
    logEmail.addEventListener('focus', function(e){
        if(logEmail.value.length < 1){
            errors_email = 'Este campo debe estar completo'
        }else if(/\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i.test(logEmail.value) != true){
            errors_email = 'El email debe ser válido'
        }
        if(errors_email != undefined){
            errorEmail.innerHTML = "<p>" + errors_email + "</p>";
            logEmail.style.borderColor = 'red';
        }
    });
    logEmail.addEventListener('change', function(e){
        if(/\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i.test(logEmail.value) == true){
            errorEmail.innerHTML = "<p>" + " " + "</p>";
            logEmail.style.borderColor = 'green';
        }
    });
//eventos para password
    password.addEventListener('focus', function(e){

        if(password.value.length < 1){
            errors_password = 'Este campo debe estar completo' 
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