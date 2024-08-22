import express from "express";
import BodegaController from "../controllers/bodegasController.js";
import db from "../utils/db.js";
const routerBodega = express.Router();

const bodegasController = new BodegaController();

// routerBodega.get('/',(req,res)=>{
//     const query = 'select * from Bodegas';
//         db.query(query, (err, results) => {
//             if (err) {
//                 res.status(500).send(err);
//             } else {
//                 res.json(results);
//             }

//         });
// });
routerBodega.get('/',bodegasController.getAllBodegas);

//routerBodega.post('/',bodegasController.addBodegas);
//routerBodega.get('/:id',bodegasController.getBodegaById);

export default routerBodega;