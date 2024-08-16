const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
//const cont = 'mysql://root:DOXMDoUoOebGMVXdJjzqtfFmCYNUrEpo@mysql.railway.internal:3306/railway';
//const cont = 'mysql://root:DOXMDoUoOebGMVXdJjzqtfFmCYNUrEpo@roundhouse.proxy.rlwy.net:27685/railway'; 
const db = mysql.createConnection({
     host: 'roundhouse.proxy.rlwy.net',//'mysql.railway.internal',
     user:'root',
     password:'DOXMDoUoOebGMVXdJjzqtfFmCYNUrEpo',
     database:'railway',
     port:27685,
});
db.connect((err) =>{
    if (err) {
        console.error('Error connecting to the DB:', err);
    }else{
        console.log('Ok connected ');
    }
});

app.get('/api/darPersonas', (req,res)=>{
    const query = 'select * from Personas';
    db.query(query,(err, results)=>{
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }

    });
});


app.get('/api/data', (req,res)=>{
    const query = 'select * from Clientes';
    db.query(query,(err, results)=>{
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }

    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});