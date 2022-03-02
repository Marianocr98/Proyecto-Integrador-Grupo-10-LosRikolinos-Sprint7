/* EXPRESS*/
const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookies = require('cookie-parser');

app.use(express.static(path.join(__dirname, '../public')));

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');



//App session 
app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
    //Este resave y saveUnitialized es necesario para que no me salgan errores aunque son opcionales
    
}));

app.use(cookies());

app.use(userLoggedMiddleware);


/*Para procesar los formularios */
app.use(express.urlencoded({extended:false}));

/* EJS */ 
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

/* IMPLEMENTACION PARA PUT Y DELETE*/
// Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
const methodOverride = require('method-override')
app.use(methodOverride('_method'));

/* REQUERIMIENTO DE RUTAS */
const mainRutas = require('./routers/indexRouter');
const rutaUser = require('./routers/userRouter') /*airu*/ 
const products = require('./routers/productsRouter');


/* RUTAS */
app.use('/', mainRutas);
app.use('/', rutaUser) 
app.use('/', products);


/*Server Funcionando*/
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando puerto 3000');
});



