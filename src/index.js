const express= require('express');
const morgan= require('morgan');
const exphbs=require('express-handdlebar'); //motor de plantillas
// inicializaciones 

const app = express();

//configuraciones 

app.set('port', process.env.PORT || 4000); // define el puerto
app.engine('.hbs',exphbs)

// middleware peticiones al servidor 

app.use(morgan('dev')); //mensaje por consola determinado 

//variables globales

// rutas url del servidor
app.use(require('./routes')); // importó routes de la otra carpeta

//codigos

//empezar el servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port')); 
});

