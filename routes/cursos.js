var express =require ('express');
const { resource, response } = require('../app');

var ruta =express.Router();

//Conectando con la base de datos
var mongoose = require('mongoose');
require('../models/modelCursos');
const Curso = mongoose.model('Curso');// Referencia la modelo


//Métdodo GET me sirve para listar los registros modificado
ruta.get('/',(req, res)=>{
    //método para buscar a todos losCursos
   Curso.find().then((cursos)=>{
        res.json(cursos);
    }).catch((error)=>{
        if(error)
            throw error;
         });
    });

//Métdodo  me sirve para encontar un número de registro
ruta.get('/:id',(req, res)=>{

   Curso.findById(req.params.id).then((curso)=>{
    res.json(curso);//Solo registra un registro
}).catch((error)=>{
    if(error)
        throw error;
     });
});

// Método POST agrega unCurso
ruta.post('/',(req, res)=>{
    //res.send('Agregando un registro deCurso');
    
    console.log(req.body);//Verificando datos en consola
        //Almacenamos los datos en una variable newcurso
        //que son extraidos del cuerpo de la solicitud
        var newCurso ={
            NoCurso: req.body.NoCurso,
            Cuatrimestre: req.body.Cuatrimestre,
            Fechainicio: req.body.Fechainicio,
            FechaFin: req.body.FechaFin,
            Nombre: req.body.Nombre,
            Descripcion: req.body.Descripcion
        }
//Curso es el modelo y le pasamos los datos de newcurso
var curso = new Curso(newCurso);

//invocamos el método de eliminar
curso.save().then(()=>{
    console.log("¡¡El nuevo Curso es creado!!");
    res.send('Un nuevo Curso fue creado exitosamente');
}).catch((error)=>{
    if(error){
        console.log('Un eror ha ocurrido al agregar unCurso');
        throw error;
    }
});

});

//Modifica PUT un registro deCurso
ruta.put('/',(req,res)=>{

// Utilizamos el método para verificar si existe en base al Numero de Control

   Curso.findOne({NoCurso: req.body.NoCurso}).then((curso)=>{
        
        console.log(req.body);
       curso.Nombre= req.body.Nombre;
       curso.Descripcion= req.body.Descripcion;

        //Solamente modificamos el nombre y Descripcion
        console.log(req.body);
        curso.markModified('Nombre');
       curso.markModified('Descripcion');

       curso.save().then(()=>{
            res.send("¡¡¡El Curso ha sido modificado exitosamente!!!");
        }).catch((error)=>{
            if(error)
            throw error;
        });
    }).catch((error)=>{
        if(error)
        throw error;
    });
});

//Elimina un registro deCurso
ruta.delete('/:id',(req,res)=>{

   Curso.findOneAndRemove(req.params.NoCurso).then(()=>{
    res.send('El Curso de ha eliminando exitosamente');
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
module.exports= ruta;