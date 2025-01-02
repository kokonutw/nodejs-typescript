import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();

class ServerBoostraps  {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(cors());
    }

    routes(): void {
        this.app.use('/api', require('./routes/index'));
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}

const server = new ServerBoostraps();
server.start();