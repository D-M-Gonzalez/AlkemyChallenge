import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import ProductsRoutes from './routes/productsRoutes';
import BrandsRoutes from './routes/brandsRoutes';
import UserRoutes from './routes/userRoutes';

const app = express();

//settings
app.set('port',process.env.PORT || 8000);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.get('/', (req,res)=>{
    res.json({message: 'welcome to my app'})
})

app.use('/api/brands',BrandsRoutes);
app.use('/api/products',ProductsRoutes);
app.use('/api/users',UserRoutes)

export default app;