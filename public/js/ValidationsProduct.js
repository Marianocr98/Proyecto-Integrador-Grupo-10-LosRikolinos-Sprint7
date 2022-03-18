window.addEventListener('load', function(){

    let errores = {};

    const form = document.querySelector('.form');
    const title = document.querySelector('#name-product');

    const price = document.querySelector('#price');

    const file = document.querySelector('#file');

    const description = document.querySelector('#description');


    console.log(title);

    //functiones

    let titleValidator = () => {
        //string vacio para el mensaje de error
        let error = '';
        let errorElement = title.nextElementSibling;
    

    //Si el titulo no es válido se escribe el error

    if(title.value.trim() == ''){
        error = 'Este campo debe estar completo'
    }else if(title.value.length < 5){
        error = 'El nombre debe tener al menos 5 caracteres'
    }

    //Si existe error se almacena en objeto errores
    if(error){
        title.classList.add('errorTitle');
        title.style.borderColor = 'red';
        errores.title = error;
    }else{
        title.classList.remove('errorTitle');
        title.style.borderColor = 'green';
        delete errores.title;
    }

    //Se imprime string de errore en Vista

        errorElement.innerText = error;

    }

    let priceValidator = () => {
        let error = '';
        let errorElement = price.nextElementSibling;

        if(price.value.trim() == ''){
            error =  'Debes darle un precio'
        }

        if(error){
            price.classList.add('errorPrice');
            price.style.borderColor = 'red';
            errores.price = error;
        }else{
            price.classList.remove('errorPrice');
            price.style.borderColor = 'green';
            delete errores.price;
        }

        errorElement.innerText = error;
    }

    let fileValidator = () => {
        let error = '';
        let errorElement = file.nextElementSibling;

        if(file.value.trim() == ''){
            error = 'Debe subir una imagen'
        }else if (/(.jpg|.jpeg|.png|.gif|bmp|tiff|.jfif)$/i.test(file.value) != true){
            error = 'Este archivo no es válido'
        }
        if(error){
            file.classList.add('errorFile');
            file.style.borderColor = 'red';
            errores.file = error;
        }else{
            file.classList.remove('errorFile');
            file.style.borderColor = 'green';
            delete errores.file
        }

        errorElement.innerText = error;
    }

    let descriptionValidator = () => {

        let error = '';
        let errorElement = description.nextElementSibling;

        if(description.value.trim() == ''){
            error = 'Este campo no puede estar vacio.'
        }else if(description.value.length < 20){
            error = 'La descripcion debe tener al menos 20 caracteres'   
        }
        if(error){
            description.classList.add('errorDescription');
            description.style.borderColor = 'red';
            errores.description = error;
        }else{
            description.classList.remove('errorDescription');
            description.style.borderColor = 'green';
            delete errores.description
        }

        errorElement.innerText = error;
    }

    //Ejecutar oyentes - Llamar a las funciones


    form.addEventListener('submit', function(e){

        titleValidator();
        priceValidator();
        fileValidator();
        descriptionValidator();

    //Si existen errores preventDefault
    
    if(Object.keys(errores).length){
        e.preventDefault();

    }else{
        alert('Se creo un nuevo producto :)')
    }

});

//Si focus sale del input se ejecutan las validaciones
title.addEventListener('blur', titleValidator);
price.addEventListener('blur', priceValidator);
file.addEventListener('blur', fileValidator);
description.addEventListener('blur', descriptionValidator);
})