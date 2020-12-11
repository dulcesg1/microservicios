const mongoose = require('mongoose');

mongoose.model('Estudiante',{
    NumeroControl:{
        type: mongoose.SchemaTypes.Number, // Tipo de dato
        required: [true, 'Se requiere un Número de Control'],
        unique:true // el valor único dentro de la colección
    }, 
    Nombre:{
        type: String,
        required: [true, 'Se requiere un nombre para el estudiante'],
        lowercase: true, // se almacenará con minúsculas
        minlegth:[3, 'Se requiere al menos tres caracteres']
    },
    Apellidos:{
        type: String,
        required: [true, 'Se reequieren apellidos para el estudiante'],
        lowercase: true,
        minlegth:[3, 'Se requiere al menos tres caracteres']
    },
    Edad:{
        type: Number,
        required: true,
        min:[1,'La edad mínima es 1'],
        max:[120, 'La edad máxima es 120']
    },
    Email:{
        type: String,
        required: [true,'Se requiere un correo electronico de Estudiante'],
        lowercase: true,
        unique: true
    }
});


