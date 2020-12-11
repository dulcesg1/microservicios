var express =require ('express');
const { resource, response } = require('../app');

var ruta =express.Router();

//Conectar  con la base de Datos
 var mongoose= require('mongoose');
require('../models/modelLibro');
const Libro= mongoose.model('Libro'); // Referencia el modelo

 // Método GET, para listar los registros
  
 ruta.get('/',(req,res)=>{
    //método para buscar todos los libros
    Libro.find().then((libros)=>{
        res.json(libros);

    }).catch((error)=>{
        if(error)
        throw error;
    });
 });

 // Método para encontrar un libro
 ruta.get('/:id',(req, res)=>{

    Libro.findOne({Id_Autor:req.params.id}).then((libro)=>{
        res.json(libro);
        res.send(libro); // Solo busca un egistro
    }).catch((error)=>{
        if(error)
            throw error;
    });
 });

 // Métod POST para agregar un Libro

 ruta.post('/',(req, res)=>{

     console.log(req.body);// verificar los datos en consola
     // Almacenar los datos en una variable, mismos que son extraidos del cuerpo de la solicitus
     var newLibro={
         
         Id_Libro: req.body.Id_Libro,
         Titulo: req.body.Titulo,
         Categoria: req.body.Categoria,
         Editorial: req.body.Editorial,
         FechaPublicacion: req.body.FechaPublicacion
     }
  // Libro es el modelo, al que se le pasan los datos de newLibro
   var book= new Libro(newLibro);
   
   //invocamos el método de eliminar
    book.save().then(()=>{
        console.log("¡¡El nuevo libro fue creado!!!");
        res.send('Un nuevo libro fue cread exitosamente');        
    }).catch((error)=>{
        if(error){
            console.log('Un error ha ocurrido al agregar un libro');
            throw error;
        }
    });
 });

ruta.put('/',(req,res)=>{

    // Utilizamos el método para verificar si existe en base al Numero de Control
    
        Libro.findOne({Id_Libro: req.body.Id_Libro}).then((libro)=>{
            
            console.log(req.body);
            libro.Titulo= req.body.Titulo;
            libro.Editorial= req.body.Editorial;
    
            //Solamente modificamos el nombre y Editorial
            console.log(req.body);
            libro.markModified('Titulo');
            libro.markModified('Editorial');
    
            libro.save().then(()=>{
                res.send("¡¡¡El libro ha sido modificado exitosamente!!!");
            }).catch((error)=>{
                if(error)
                throw error;
            });
        });
    });
  
//Elimina un registro de Libro
ruta.delete('/:Id_Libro',(req,res)=>{

    Libro.findOneAndRemove({Id_Autor:req.params.Id_Autor}).then(()=>{
     res.send('El Libro de ha eliminando exitosamente');
     }).catch((error)=>{
         if(error)
         throw error;
     });
 });
 
module.exports = ruta;