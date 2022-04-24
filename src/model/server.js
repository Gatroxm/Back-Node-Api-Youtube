const express = require('express');
const cors = require('cors');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.youtubeListApi = '/api/youtube/';
        //midelwares
        this.midelwares();
        //Rutas
        this.routes();
    }

    midelwares() {
        // cors
        this.app.use(cors());
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });

        //Lectura y parcedo del body
        this.app.use(express.json());

        // Dirección publica
        this.app.use(express.static('public'))
    }
    routes() {
        this.app.use(this.youtubeListApi, require('../routes/youtube.routes'));
    }
    listen() {
        this.app.listen(this.port, (req, res) => {
            console.log(`listening on port ${this.port}`);
        });
    }
}

module.exports = Server;