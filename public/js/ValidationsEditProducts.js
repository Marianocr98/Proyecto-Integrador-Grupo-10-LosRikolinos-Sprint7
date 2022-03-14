window.addEventListener('load', function(){

    let form = document.querySelector('.form');
    let title = document.querySelector('#title');
    let errorTitulo = document.querySelector(".errorTitulo");
    let price = document.querySelector('#price');
    let errorPrice = document.querySelector(".errorPrice");
    let file = document.querySelector('#file');
    let errorImgProductos= document.querySelector(".errorImgProductos");
    let description = document.querySelector('#description');
    let errorDescription= document.querySelector(".errorDescription");
    let buton = document.querySelector('.button');
    
    buton.addEventListener('click', function(e){
        e.preventDefault();
        let errors = {}
    
        //title
        if(title.value == ''){
            errors.title = 'Este campo debe estar completo'
        }else if( title.value.length < 5){
            errors.title = 'El nombre debe tener al menos 5 caracteres'   
            }
        //price
        if(price.value == ''){
            errors.price = 'Debes darle un precio'
        }
        //File
        if(file.value == ''){
            errors.file = 'Debe subir una imagen'
        }else if(/(.jpg|.jpeg|.png|.gif|bmp|tiff)$/i.test(file.value) != true){
            errors.file = 'Este archivo no es válido'
        }

        //description
        if(description.value == ''){
            errors.description = 'Este campo no puede estar vacio.'
        }else if( title.value.length < 20){
            errors.description = 'La descripcion debe tener al menos 20 caracteres'   
            }
    
        if(Object.keys(errors).length >= 1){
            errorTitulo.innerText = (errors.title) ? errors.title : '';
    
            errorPrice.innerText = (errors.price) ? errors.price : '';
    
            errorImgProductos.innerText = (errors.file) ? errors.file : '';

            errorDescription.innerText = (errors.description) ? errors.description : '';
        }else{
            form.submit();
        }
    })
    
    })
    