import express from 'express';
import loteController from '../controllers/loteController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();


/**
* @swagger
* /lote/darLotes:
*   get:
*     summary: Obtener todos los lotes
*     description: Obtiene los lotes.
*     tags:
*       - Lotes
*     responses:
*       200:
*         description: Lista de lotes.
*       404:
*         description: lotes no encontrados.
*/
router.get('/darLotes', authMiddleware, loteController.getLotes);


/**
* @swagger
* /lote/{id}:
*   get:
*     summary: Obtener un lote por ID
*     description: Obtiene los detalles de un lote específico.
*     tags:
*       - Lotes
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Detalles del lote.
*       404:
*         description: lote no encontrado.
*/
router.get('/:id', authMiddleware, loteController.getLote);

/**
* @swagger
* /lote/nombre/{nombreOCodigo}:
*   get:
*     summary: Obtener un lote por nombre
*     description: Obtiene los detalles de un lote específico.
*     tags:
*       - Lotes
*     parameters:
*       - in: path
*         name: nombreOCodigo
*         required: true
*         schema:
*           type: string
*     responses:
*       200:
*         description: Detalles del lote.
*       404:
*         description: lote no encontrado.
*/
router.get('/nombre/:nombreOCodigo', authMiddleware, loteController.getLoteByNombreOCodigo);

/**
 * @swagger
 * /lote/agregar:
 *   post:
 *     summary: Registrar un nuevo lote
 *     description: Registra un nuevo lote en la base de datos.
 *     tags:
 *       - Lotes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idProducto:
 *                 type: integer
 *               FechaEntrada:
 *                 type: string
 *               FechaVencimiento:
 *                 type: string
 *               CodigoLote:
 *                 type: string
 *               CodigoBarras:
 *                 type: string
 *     responses:
 *       200:
 *         description: Registro exitoso.
 *       400:
 *         description: Error en la solicitud.
 */
router.post('/agregar', authMiddleware, loteController.addLote);

/**
* @swagger
* /lote/{id}:
*   put:
*     summary: Actualizar un lote
*     description: Actualiza la información de un lote existente.
*     tags:
*       - Lotes
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
 *               idProducto:
 *                 type: integer
 *               FechaEntrada:
 *                 type: string
 *               FechaVencimiento:
 *                 type: string
 *               CodigoLote:
 *                 type: string
 *               CodigoBarras:
 *                 type: string
*     responses:
*       200:
*         description: lote actualizado exitosamente.
*       400:
*         description: Error en la solicitud.
*/
router.put('/:id', authMiddleware, loteController.updateLote);

/**
* @swagger
* /lote/{id}:
*   delete:
*     summary: Eliminar un lote
*     description: Elimina un lote existente.
*     tags:
*       - Lotes
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       204:
*         description: Lote eliminado exitosamente.
*       400:
*         description: Error en la solicitud.
*/
router.delete('/:id', authMiddleware, loteController.deleteLote);




export default router;
