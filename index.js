'use strict'

var mongoose = require('mongoose');
var port = 3800;
var app = require('./app');

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://localhost:27017/DBControlEmpresa2018037', {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('Conexión correcta a la base de datos.');
    app.listen(port,()=>{
        console.log('Servidor de express corriendo en el puerto:',port);
    });
}).catch(err=>{
    console.log('Error de conexión.',err);
});

