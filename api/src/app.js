import express from 'express'; // libreria que se encarga de crear un servidor tipo rest.
import cors from 'cors';// Libreria que permite la conexion con el clinete
import { sequelize } from './models/index.js'; // Base de datos
import setupSwagger from './swagger.js';

// import routerBodega from './routes/bodegaRauters.js'; // define las rutas del API
import authRoutes from './routes/authRoutes.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import bodegaRoutes from './routes/bodegaRauters.js';
import InventarioRoutes from './routes/inventarioRouters.js';
import ProductoRouters from './routes/productoRouters.js'

const app = express();

// //BEGIN ** ** rutas **
// app.use('/api/darBodegas', routerBodega);// Metodo que consume el servicio y retorna las bodegas
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/users', usuarioRoutes);
app.use('/bodegas', bodegaRoutes);
app.use('/Inventario', InventarioRoutes);
app.use('/producto', ProductoRouters);
// //END ** ** rutas **

sequelize.authenticate().then(() => {
    console.log('Base de datos conectada...');
}).catch((error) => {
    console.error('No se puede conectar a la base de datos, error:', error);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor listo en el puerto  ${PORT}`);    
    setupSwagger(app, PORT);// Configura las rutas del archivo Swagger.
});
