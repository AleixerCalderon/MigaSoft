import express from "express";
import BodegaController from "../controllers/bodegasController.js";
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
* @swagger
* /bodegas/{id}:
*   delete:
*     summary: Eliminar una bodega
*     description: Elimina una bodega existente.
*     tags:
*       - Bodegas
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       204:
*         description: Bodega eliminada exitosamente.
*       400:
*         description: Error en la solicitud.
*/
router.delete('/:id', authMiddleware, BodegaController.deleteBodega);


/**
* @swagger
* /bodegas/{id}:
*   put:
*     summary: Actualizar una bodega
*     description: Actualiza la información de una bodega existente.
*     tags:
*       - Bodegas
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               idTipoBodega:
 *                 type: integer
 *               habilitado:
 *                 type: string
*     responses:
*       200:
*         description: Bodega actualizada exitosamente.
*       400:
*         description: Error en la solicitud.
*/
router.put('/:id', authMiddleware, BodegaController.updateBodega);


/**
 * @swagger
 * /bodegas/agregar:
 *   post:
 *     summary: Registrar una nueva bodega
 *     description: Registra una nueva bodega en la base de datos.
 *     tags:
 *       - Bodegas
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               idTipoBodega:
 *                 type: integer
 *               habilitado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Registro exitoso.
 *       400:
 *         description: Error en la solicitud.
 */
 router.post('/agregar', authMiddleware, BodegaController.addBodega);


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