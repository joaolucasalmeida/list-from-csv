import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usersRoutes from './routes/usersRoutes';

function setupServer() {
    const app = express()
    
    app.use(cors({origin: '*'}))
    app.use(morgan("dev"));
    app.use(usersRoutes) 
    
    return app
}

const app = setupServer()

export default app;
