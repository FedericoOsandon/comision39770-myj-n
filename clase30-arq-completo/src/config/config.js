const { connect } = require("mongoose")

exports.config = {
    connectDB: async () => {
        try {
            await connect('mongodb://localhost:27017/c39770',{
                useNewUrlParser: true,
                useUnifiedTopology: true                
            })
            console.log('Base de datos conectada')            
        } catch (error) {
            console.log('Error al conectar la base de datos')
        }
    }
}