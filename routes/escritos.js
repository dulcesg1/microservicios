var express =require ('express');
const { resource, response } = require('../app');

var router =express.Router();

//Conectando con la base de datos
var mongoose = require('mongoose');
require('../models/modelAutorLibro');

const AutorLibro = mongoose.model('AutorLibro');// Referencia la modelo

//Métdodo GET me sirve para listar los registros modificado
router.get('/',(req, res)=>{
    //método para buscar a todos los escritos
    AutorLibro.find().then((escritos)=>{
        res.json(escritos);
    }).catch((error)=>{
        if(error)
            throw error;
         });
    });

//Métdodo  me sirve para encontar un número de registro
router.get('/:id',(req, res)=>{

    AutorLibro.findOne({Id_Escrito: req.params.id}).then((escrito)=>{
    res.json(escrito);//Solo registra un registro
}).catch((error)=>{
    if(error)
        throw error;
     });
});
//Modifica PUT un registro de escrito
router.put('/',(req,res)=>{

    // Utilizamos el método para verificar si existe en base al Id_Autor
    
        AutorLibro.findOne({Id_Escrito: req.body.Id_Escrito}).then((escrito)=>{
            
            console.log(req.body);
            escrito.Descripcion= req.body.Descripcion;
            escrito.ISBN= req.body.ISBN;
    
            //Solamente modificamos el nombre y apellidos
            console.log(req.body);
            escrito.markModified('Descripcion');
            escrito.markModified('ISBN');
    
            escrito.save().then(()=>{
                res.send("¡¡¡El escrito ha sido modificado exitosamente!!!");
            }).catch((error)=>{
                if(error)
                throw error;
            });
        });
    });
    
    //Elimina un registro de autor
    router.delete('/:Id_Escrito',(req,res)=>{
    
        AutorLibro.findOneAndRemove({Id_Escrito:req.params.Id_Escrito}).then(()=>{
        res.send('El escrito de ha eliminando exitosamente');
        }).catch((error)=>{
            if(error)
            throw error;
        });
    });

//router para invocar la operación
router.post('/',(req, res)=>{
        //Extrae los datos del body enviados mediante el request
    var newEscrito ={
        Id_Escrito: req.body.Id_Escrito,
        Id_Autor: req.body.Id_Autor,
        Id_Libro: req.body.Id_Libro,
        Descripcion: req.body.Descripcion,
        ISBN: req.body.ISBN
    }
    //Se crea un objeto con los datos
    var obra =new AutorLibro(newEscrito);

    obra.save().then(()=>{
        res.send("Se ha agregado una obra con éxito");
    
    }).catch((err)=>{
        if(err)
        throw err;
    });
});
module.exports= router;