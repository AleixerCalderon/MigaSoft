import express from "express";
import InventarioController from "../controllers/inventarioController.js";
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
* @swagger
* /Inventario/getMovimientosInventario:
*   get:
*     summary: Lista de los movimientos de Inventarios 
*     description: Obtener la lista de movimientos de inventarios.
*     tags:
*       - Inventario
*     responses:
*       204:
*         description: Lista movimientos de Inventario.
*       400:
*         description: Error en la solicitud.
*/
router.get('/getMovimientosInventario', authMiddleware, InventarioController.getMovimientosInventario);

/**
* @swagger
* /Inventario:
*   get:
*     summary: Lista de Inventarios 
*     description: Obtener la lista de Inventarios .
*     tags:
*       - Inventario
*     responses:
*       204:
*         description: Lista Inventario.
*       400:
*         description: Error en la solicitud.
*/
router.get('/', authMiddleware, InventarioController.getAllInventario);

/**
* @swagger
* /Inventario/{id}:
*   get:
*     summary: Obtener un Inventario por ID
*     description: Obtiene el detalle el id de la bodega.
*     tags:
*       - Inventario
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Detalles del inventario.
*       404:
*         description: Inventario no encontrado.
*/
router.get('/:id', authMiddleware, InventarioController.getInventarioById);
 

export default router;