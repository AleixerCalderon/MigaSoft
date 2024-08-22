// Deja iniciado el servidor con el puerto 3001 escuchando
import app from './app.js'; // importa el archivo app.js que contiene la libreria express

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});

