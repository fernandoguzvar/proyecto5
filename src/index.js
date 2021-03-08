const express= require('express');
const morgan = require('morgan');
const exphbs= require('express-handlebars');
const path= require('path');

//inicio
const app=express();

//configuraciones
app.set('port' ,process.env.PORT||8000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs',
    helpers:require('./lib/handlebars')
}));

app.set('view engine','.hbs');

//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//variables globales
app.use((req,res,next)=>{
    next();
}); 

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links')); 
app.use('/crud',require('./routes/crud')); 
app.use('/producto',require('./routes/productos')); 
app.use('/team',require('./routes/team')); 
app.use('/contacto',require('./routes/contacto')); 
app.use('/usuario',require('./routes/usuario')); 
app.use('/corporativo',require('./routes/corporativo')); 
app.use('/proveedor',require('./routes/proveedor')); 
app.use('/noticia',require('./routes/noticia')); 
app.use('/comunidad',require('./routes/comunidad')); 
app.use('/redes',require('./routes/redes')); 
app.use('/grafico',require('./routes/grafico')); 

//public
app.use(express.static(path.join(__dirname,'public')));

//inicia el server 
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
});