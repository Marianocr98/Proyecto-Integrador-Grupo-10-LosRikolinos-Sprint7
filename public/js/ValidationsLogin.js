window.addEventListener('load', function(){
    let form = document.querySelector('.form');
    let logEmail = document.querySelector('#nombre');
    let errorEmail = document.querySelector(".errorEmail");
    let password = document.querySelector('#password');
    let errorPassword = document.querySelector(".errorPassword");
    let buton = document.querySelector('.buton');

    buton.addEventListener('click', function(e){
        e.preventDefault();
        let errors = {}

        //logEmail
        if(logEmail.value == ''){
            errors.email = 'Este campo debe estar completo'
        }else if(/\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i.test(logEmail.value) != true){
            errors.email = 'El email debe ser válido'
        }
        //password
        if(password.value == ''){
            errors.password = 'Este campo debe estar completo'
        }

        if(Object.keys(errors).length >= 1){

            errorEmail.innerText = (errors.email) ? errors.email : '';

            errorPassword.innerText = (errors.password) ? errors.password : '';
        }else{
        form.submit();
    }
    })
})