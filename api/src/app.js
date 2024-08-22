import express from 'express'; // libreria que se encarga de crear un servidor tipo rest.
import cors from 'cors';// Libreria que permite la conexion con el clinete
import routerBodega from './routes/bodegaRauters.js'; // define las rutas del API

const app = express();
app.use(cors());
app.use(express.json());

//BEGIN ** ** rutas **
app.use('/api/darBodegas', routerBodega);// Metodo que consume el servicio y retorna las bodegas

//END ** ** rutas **

export default app;// exporta la constante app, para el archivo server.js

