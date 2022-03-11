window.addEventListener('load', function(){

    let form = document.querySelector('.form');
    let title = document.querySelector('#name-product');
    let errorTitle = document.querySelector('.errorTitle');
    let price = document.querySelector('#price');
    let errorPrice = document.querySelector(".errorPrice");
    let file = document.querySelector('#file');
    let errorFile = document.querySelector(".errorFile");
    let description = document.querySelector('#description');
    let errorDescription = document.querySelector(".errorDescription");
    let buton = document.querySelector('.button-admin');


    buton.addEventListener('click', function(e){
        e.preventDefault();

        let errors = {}

        //Nombre
        if(title.value == ''){
            errors.title = 'Este campo debe estar completo'
        }else if( title.value.length < 5){
            errors.title = 'El nombre debe tener al menos 5 caracteres'   
            }

        //Precio
        if(price.value == ''){
            errors.price = 'Debes darle un precio'
        }

        //Imagen del producto
        if(file.value == ''){
            errors.file = 'Debe subir una imagen'
        }else if(/(.jpg|.jpeg|.png|.gif|bmp|tiff)$/i.test(file.value) != true){
            errors.file = 'Este archivo no es válido'
        }

        //Descripcion
        if(description.value == ''){
            errors.description = 'Este campo no puede estar vacio.'
        }else if( title.value.length < 20){
            errors.description = 'La descripcion debe tener al menos 20 caracteres'   
            }

            if(Object.keys(errors).length >= 1){
                errorTitle.innerText = (errors.title) ? errors.title : '';
        
                errorPrice.innerText = (errors.price) ? errors.price : '';
        
                errorFile.innerText = (errors.file) ? errors.file : '';
    
                errorDescription.innerText = (errors.description) ? errors.description : '';
            }else{
                form.submit();
            }
    })
})