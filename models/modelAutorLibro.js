const mongoose= require('mongoose');
var  Schema= mongoose.Schema;

const Autor =mongoose.model('Autor');
const Libro =mongoose.model('Libro');

mongoose.model('AutorLibro',{
    Id_Escrito:{
        type: mongoose.SchemaTypes.Number, 
        require: [true, 'Se necesita un ID de Escritor'],
        unique: true
    },
    Id_Autor:{
        type: mongoose.SchemaTypes.Number, ref:"Autor",
        require: [true, 'Se necesita un ID de Autor']
       
    },
    Id_Libro:{
        type: mongoose.SchemaTypes.Number, ref: "Libro",
        require: [true,'Se requiere un ID de libro']
        
    },
    Descripcion:{
        type: String,
        require: true,
    },
    ISBN:{
        type:mongoose.SchemaTypes.Number,
        require: true   
    }
    
});
