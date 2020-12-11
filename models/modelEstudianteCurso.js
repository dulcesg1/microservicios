const mongoose = require('mongoose');

mongoose.model('EstudianteCurso',{
    NumeroControl:{
        type: mongoose.SchemaTypes.Number,
        require: true
    },
    NoCurso:{
        type: mongoose.SchemaTypes.Number,
        require: true
    },
    Puntuación:{
        type:Number,
        require:true
    },
    Terminado:{
        type: mongoose.SchemaTypes.Boolean,
        require: true, 
        default: false
    }

});