import express from "express";
import BodegaController from "../controllers/bodegasController.js";
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();


/**
* @swagger
* /bodegas:
*   get:
*     summary: Lista bodegas activas 
*     description: Obtener la lista de bodegas activas .
*     tags:
*       - Bodegas
*     responses:
*       204:
*         description: Lista de bodegas exitoso.
*       400:
*         description: Error en la solicitud.
*/
router.get('/', authMiddleware, BodegaController.getAllBodegas);


export default router;