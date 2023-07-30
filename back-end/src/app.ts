import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usersRoutes from './routes/usersRoutes';

setupServer()

function setupServer() {
    const app = express()
    const port = process.env.PORT || 4000
    
    app.use(cors({origin: '*'}))
    app.use(morgan("dev"));
    app.use(express.json())
    app.use(express.urlencoded({extended: false}));
    app.use(usersRoutes) 
    
    app.listen(port, () => {
      console.log(`App listening at port:${process.env.PORT || '4000'}`);
    })
}
