import mysql from 'mysql2';
const db = mysql.createConnection({
     host: '35.223.226.140',
     user:'migasoft',
     password:'Migasoft2024#',
     database:'MigaSoft',
     port:3306,
});
db.connect((err) =>{
    if (err) {
        console.error('Error connecting to the DB:', err);
    }else{
        console.log('Ok connected ');
    }
});


export default db;