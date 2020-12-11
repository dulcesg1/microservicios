const mongoose = require("mongoose");
// Copia la URL del sitio de mongo DB
const MongoURI = "mongodb+srv://test:test@cluster0.aw5pc.mongodb.net/Microservicios?retryWrites=true&w=majority";
//const MongoURI = "mongodb+srv://test:test@BDUII.sowex.mongodb.net/microservicios?retryWrites=true&w=majority";
const MongoServer = async () => {
    try {
        await mongoose.connect(MongoURI, 
            {useNewUrlParser: true
        });
        console.log("Conectado a la Base de Datos de MongoDB Atlas !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};
module.exports = MongoServer;
