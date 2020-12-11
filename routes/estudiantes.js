var express =require ('express');
const { resource, response } = require('../app');

var ruta =express.Router();

//Conectando con la base de datos
var mongoose = require('mongoose');
require('../models/modelEstudiante');
const Estudiante = mongoose.model('Estudiante');// Referencia la modelo


//Métdodo GET me sirve para listar los registros modificado
ruta.get('/',(req, res)=>{
    //método para buscar a todos los estudiantes
    Estudiante.find().then((estudiantes)=>{
        res.json(estudiantes);
    }).catch((error)=>{
        if(error)
            throw error;
         });
    });

//Métdodo  me sirve para encontar un número de registro
ruta.get('/:id',(req, res)=>{

    Estudiante.findById(req.params.id).then((estudiante)=>{
    res.json(estudiante);//Solo registra un registro
}).catch((error)=>{
    if(error)
        throw error;
     });
});

// Método POST agrega un estudiante
ruta.post('/',(req, res)=>{
    //res.send('Agregando un registro de estudiante');
    
    console.log(req.body);//Verificando datos en consola
        //Almacenamos los datos en una variable newEstudiante
        //que son extraidos del cuerpo de la solicitud
        var newEstudiante ={
            NumeroControl: req.body.NumeroControl,
            Nombre: req.body.Nombre,
            Apellidos: req.body.Apellidos,
            Edad: req.body.Edad,
            Email: req.body.Email
        }
// Estudiante es el modelo y le pasamos los datos de newEstudiante
var student = new Estudiante(newEstudiante);

//invocamos el método de eliminar
student.save().then(()=>{
    console.log("¡¡El nuevo estudiante es creado!!");
    res.send('Un nuevo estudiante due creado exitosamente');
}).catch((error)=>{
    if(error){
        console.log('Un eror ha ocurrido al agregar un estudiante');
        throw error;
    }
});

});

//Modifica PUT un registro de estudiante
ruta.put('/',(req,res)=>{

// Utilizamos el método para verificar si existe en base al Numero de Control

    Estudiante.findOne({NumeroControl: req.body.NumeroControl}).then((estudiante)=>{
        
        console.log(req.body);
        estudiante.Nombre= req.body.Nombre;
        estudiante.Apellidos= req.body.Apellidos;

        //Solamente modificamos el nombre y apellidos
        console.log(req.body);
        estudiante.markModified('Nombre');
        estudiante.markModified('Apelllidos');

        estudiante.save().then(()=>{
            res.send("¡¡¡El estudiante ha sido modificado exitosamente!!!");
        }).catch((error)=>{
            if(error)
            throw error;
        });
    });
});

//Elimina un registro de estudiante
ruta.delete('/:id',(req,res)=>{

    Estudiante.findOneAndRemove(req.params.NumeroControl).then(()=>{
    res.send('El estudiante de ha eliminando exitosamente');
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
module.exports= ruta;