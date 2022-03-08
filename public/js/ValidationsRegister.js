window.addEventListener('load', function(){

let form = document.querySelector('.form');
let fullName = document.querySelector('#fullName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm');
let buton = document.querySelector('.buton');


    form.addEventListener("submit", function(event){
    
    

        let errores = [];

        if(fullName.value == ''){
            errores.push('el campo de nombre no puede estar vacio')
        }else if( fullName.value.length < 3){
            errores.push("el campo de nombre debe tener al menos 3 caracteres")
        }
    

        if(email.value ==  "" ){
            errores.push('el campo de email no puede estar vacio') }
        
        if(password.value == "") {
            errores.push('debes completar password')
        }
        if(confirmPassword.value == "") {
            errores.push('debes completar la confirmacion del password')
        }
        else if(password.value >= 8){
            errores.push('el password debe contener al menos 8 caracteres')
        }
        if(password.value != confirmPassword.value){
            errores.push('Los password deben coincidir');
        }



        if (errores.length > 0){
            event.preventDefault();


            let UlError = document.querySelector("div.errores ul")
            for (let i = 0; i < errores.length; i++) {
                
                
            UlError.innerHTML = "<li>" + errores.join(', ') + "</li>"
                
                
            } 
        }
    })
})





