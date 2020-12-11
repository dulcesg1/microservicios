var express =require ('express');
const { resource, response } = require('../app');

var ruta =express.Router();

//Conectando con la base de datos
var mongoose = require('mongoose');
require('../models/modelAutor');
const Autor = mongoose.model('Autor');// Referencia la modelo


//Métdodo GET me sirve para listar los registros modificado
ruta.get('/',(req, res)=>{
    //método para buscar a todos los autores
    Autor.find().then((autores)=>{
        res.json(autores);
    }).catch((error)=>{
        if(error)
            throw error;
         });
    });

//Métdodo  me sirve para encontar un número de registro
ruta.get('/:id',(req, res)=>{

    Autor.findOne({Id_Autor:req.params.id}).then((autor)=>{
    res.json(autor);//Solo registra un registro
}).catch((error)=>{
    if(error)
        throw error;
     });
});

// Método POST agrega un autor
ruta.post('/',(req, res)=>{
    //res.send('Agregando un registro de autor');
    
    console.log(req.body);//Verificando datos en consola
        //Almacenamos los datos en una variable newAutor
        //que son extraidos del cuerpo de la solicitud
        var newAutor ={
            Id_Autor: req.body.Id_Autor,
            Nombre: req.body.Nombre,
            ApellidoPat: req.body.ApellidoPat,
            ApellidoMat: req.body.ApellidoMat,
            FechaNacimiento: req.body.FechaNacimiento
            
        }
// Autores el modelo y le pasamos los dakmkmkmkmktos de newAutor
var escritor = new Autor(newAutor);

//invocamos el método de eliminar
escritor.save().then(()=>{
    console.log("¡¡El nuevo autor es creado!!");
    res.send('Un nuevo autor fue creado exitosamente');
}).catch((error)=>{
    if(error){
        console.log('Un error ha ocurrido al agregar un autor');
        throw error;
    }
});

});

//Modifica PUT un registro de autor
ruta.put('/',(req,res)=>{

// Utilizamos el método para verificar si existe en base al Id_Autor

    Autor.findOne({Id_Autor: req.body.Id_Autor}).then((autor)=>{
        
        console.log(req.body);
        autor.Nombre= req.body.Nombre;
        autor.ApellidoPat= req.body.ApellidoPat;

        //Solamente modificamos el nombre y apellidos
        console.log(req.body);
        autor.markModified('Nombre');
        autor.markModified('ApelllidoPat');

        autor.save().then(()=>{
            res.send("¡¡¡El autor ha sido modificado exitosamente!!!");
        }).catch((error)=>{
            if(error)
            throw error;
        });
    });
});

//Elimina un registro de autor
ruta.delete('/:Id_Autor',(req,res)=>{

    Autor.findOneAndRemove({Id_Autor:req.params.Id_Autor}).then(()=>{
    res.send('El autor de ha eliminando exitosamente');
    }).catch((error)=>{
        if(error)
        throw error;
    });
});
module.exports= ruta;
 