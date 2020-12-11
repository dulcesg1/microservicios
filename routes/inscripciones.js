var express = require ('express');
const { resource, response } = require('../app');

var ruta =express.Router();
//router para invocar la operación
ruta.post('/',(req, res)=>{
        //Extrae los datos del body enviados mediante el request
    var newInscripcion ={
        NumeroControl: req.body.NumeroControl,
        NoCurso: req.body.NoCurso,
        Puntuacion: req.body.Puntuacion,
        Terminado: req.body.Terminado
    }
    //Se crea un objeto con los datos
    var matriculacion =new EstudianteCursos(newInscripcion);

    matriculacion.save().then(()=>{
        res.send("Se ha agregado una inscripción con éxito");
    
    }).catch((err)=>{
        if(err)
        throw err;
    });
});

module.exports= ruta;