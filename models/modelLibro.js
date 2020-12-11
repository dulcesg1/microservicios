const mongoose= require('mongoose');

mongoose.model('Libro',{
   
    Id_Libro:{
        type: mongoose.SchemaTypes.Number,
        require: [true,'Se requiere una ID'],
        unique: true
    },
    Titulo:{
        type:String,
        required:[true, 'Se requiere un titulo'],
        lowercase: true,
        minlegth:[2, 'Se requiere al menos dos caracteres']
    },
    Categoria:{
        type:String,
        required:[true, 'Se requiere una categoria'],
        lowercase: true,
        minlegth:[2, 'Se requiere al menos dos caracteres']
    },
    Editorial:{
        type:String,
        required:[true, 'Se requiere una Editorial'],
        uppercase: true,
        minlegth:[2, 'Se requiere al menos dos caracteres']
    },
    FechaPublicacion:{
        type:Date,
        required:[true, 'Se requiere una categoria'],
    }
});
