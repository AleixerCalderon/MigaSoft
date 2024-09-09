import express from "express";
import TrasladoController from "../controllers/trasladoController.js";
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * /traslado/agregar:
 *   post:
 *     summary: Crear un nuevo traslado
 *     description: Crea un nuevo traslado entre bodegas y registra los detalles de los lotes involucrados.
 *     tags:
 *       - Traslados
 *     requestBody:
*        required: true
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                idBodegaOrigen:
*                  type: integer
*                  example: 1
*                  description: ID de la bodega de origen
*                idBodegaDestino:
*                  type: integer
*                  example: 2
*                  description: ID de la bodega de destino
*                descripcion:
*                  type: string
*                  example: Traslado de productos
*                  description: Descripción del traslado
*                detalles:
*                  type: array
*                  items:
*                    type: object
*                    properties:
*                      idLote:
*                        type: integer
*                        example: 1
*                        description: ID del lote involucrado en el traslado
*                      cantidad:
*                        type: integer
*                        example: 100
*                        description: Cantidad de productos trasladados para ese lote
 *     responses:
*        '201':
*          description: Traslado y detalles creados exitosamente
*          content:
*            application/json:
*              schema:
*                type: object
*                properties:
*                  idTraslado:
*                    type: integer
*                    example: 123
*                  mensaje:
*                    type: string
*                    example: Traslado creado exitosamente
*        '400':
*          description: Datos inválidos en la solicitud
*        '500':
*          description: Error en el servidor
 */
router.post('/agregar', authMiddleware, TrasladoController.addTraslado);

export default router;