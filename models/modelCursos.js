const mongoose = require('mongoose');

mongoose.model('Curso',{
    NoCurso:{
        type: Number,
        required: true,
        unique:true
    }, 
    Cuatrimestre:{
        type: Number,
        required: true,
        minlegth:3
    },
    Fechainicio:{
        type: Date,
        required: true
        
    },
    FechaFin:{
        type: Date,
        required: true,

    },
    Nombre:{
        type: String,
        required: true,
        unique:true
    },
    Descripcion:{
        type: String,
        required: true
    }
});
