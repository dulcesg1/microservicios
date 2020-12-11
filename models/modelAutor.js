const mongoose= require('mongoose');

mongoose.model('Autor',{
    Id_Autor:{
        type: mongoose.SchemaTypes.Number,
        require: [true, 'Se necesita un ID de Autor'],
        unique: true
    },
    Nombre: {
        type: String,
        required:[true, 'Se require un nombre de Autor'],
        lowercase: true, 
        minlenght:[2, 'Se requiere al menos 2 caracteres']     
    },
    ApellidoPat: {
        type: String,
        required:[true, 'Se require al menos un Apellido del Autor'],
        lowercase: true, 
        minlenght:[2, 'Se requiere al menos 2 caracteres']     
    },
    ApellidoMat: {
        type: String,
        required:false,
        lowercase: true, 
        minlenght:[2, 'Se requiere al menos 2 caracteres']     
    },
    FechaNacimiento:{
        type: Date,
        required: true
    }
});