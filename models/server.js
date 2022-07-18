const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
       this.app = express()
       this.port = process.env.PORT
       this.usuariosRoutePath = '/api/usuarios'

       //Middlewares
        this.middleware()

       // Rutas
       this.routes()
    }

    middleware(){
        //CORS
        this.app.use(cors())
        
        // Parseo y Lectura del body
        this.app.use(express.json())

        // directorio publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosRoutePath,require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`)
        })
    }

}

module.exports = Server