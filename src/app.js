import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import itemsRoutes from './routes/itemsRoutes';

const app = express();

//Port settings
app.set('port',process.env.PORT || 8000);

//Middlewares used
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Basic routes
app.get('/', (req,res)=>{
    res.json({message: 'welcome to the Alkemy Challenge Backend'})
})

app.use('/api/users',userRoutes); //Goes to users

app.use('/api/items',itemsRoutes); //Goes to items

export default app;