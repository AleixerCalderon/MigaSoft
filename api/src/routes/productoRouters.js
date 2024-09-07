import express from 'express';
import productoController from '../controllers/productoController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
* @swagger
* /producto/{id}:
*   get:
*     summary: Obtener un producto por ID
*     description: Obtiene los detalles de un producto específico.
*     tags:
*       - Productos
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Detalles del producto.
*       404:
*         description: producto no encontrado.
*/
router.get('/:id', authMiddleware, productoController.getProducto);

/**
* @swagger
* /producto/nombre/{nombre}:
*   get:
*     summary: Obtener un producto por nombre
*     description: Obtiene los detalles de un producto específico.
*     tags:
*       - Productos
*     parameters:
*       - in: path
*         name: nombre
*         required: true
*         schema:
*           type: string
*     responses:
*       200:
*         description: Detalles del producto.
*       404:
*         description: producto no encontrado.
*/
router.get('/nombre/:nombre', authMiddleware, productoController.getProductoByNombre);

/**
 * @swagger
 * /producto/agregar:
 *   post:
 *     summary: Registrar un nuevo producto
 *     description: Registra un nuevo producto en la base de datos.
 *     tags:
 *       - Productos
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
 *               peso:
 *                 type: integer
 *               volumen:
 *                 type: integer
 *               PrecioUnitario:
 *                 type: integer
 *               PrecioVenta:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Registro exitoso.
 *       400:
 *         description: Error en la solicitud.
 */
router.post('/agregar', authMiddleware, productoController.addProducto);


/**
* @swagger
* /producto/{id}:
*   put:
*     summary: Actualizar un producto
*     description: Actualiza la información de un producto existente.
*     tags:
*       - Productos
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
 *               peso:
 *                 type: integer
 *               volumen:
 *                 type: integer
 *               PrecioUnitario:
 *                 type: integer
 *               PrecioVenta:
 *                 type: integer
*     responses:
*       200:
*         description: producto actualizado exitosamente.
*       400:
*         description: Error en la solicitud.
*/
router.put('/:id', authMiddleware, productoController.updateProducto);

/**
* @swagger
* /producto/{id}:
*   delete:
*     summary: Eliminar un producto
*     description: Elimina un producto existente.
*     tags:
*       - Productos
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       204:
*         description: Producto eliminado exitosamente.
*       400:
*         description: Error en la solicitud.
*/
router.delete('/:id', authMiddleware, productoController.deleteProducto);


export default router;
