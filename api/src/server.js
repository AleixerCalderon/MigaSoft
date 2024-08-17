// import dotenv from 'dotenv';
// dotenv.confing();
const app = require('../app.js');
//import app from '../app.js';

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});