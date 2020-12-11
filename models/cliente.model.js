var mongoose = require('mongoose');
var schema = mongoose.Schema;

var clienteSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        minlength: 2
    },
    telefono:{
        type: Number,
        required: true
    }
}); 
module.exports=mongoose.Schema('cliente',clienteSchema);