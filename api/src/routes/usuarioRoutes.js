import express  from 'express';
import usuarioController from '../controllers/usuarioController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
* @swagger
* /users:
*   get:
*     summary: Obtener lista de usuarios
*     description: Obtiene los usuarios.
*     tags:
*       - Usuarios
*     responses:
*       200:
*         description: Detalles de los usuarios.
*       404:
*         description: Usuarios no encontrados.
*/
router.get('/', authMiddleware, usuarioController.getUsers);
 
/**
* @swagger
* /users/{id}:
*   get:
*     summary: Obtener un usuario por ID
*     description: Obtiene los detalles de un usuario específico.
*     tags:
*       - Usuarios
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Detalles del usuario.
*       404:
*         description: Usuario no encontrado.
*/
router.get('/:id', authMiddleware, usuarioController.getUser);
 
/**
* @swagger
* /users/{id}:
*   put:
*     summary: Actualizar un usuario
*     description: Actualiza la información de un usuario existente.
*     tags:
*       - Usuarios
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
*               usuario:
*                 type: string
*               hashClave:
*                 type: string
*     responses:
*       200:
*         description: Usuario actualizado exitosamente.
*       400:
*         description: Error en la solicitud.
*/
router.put('/:id', authMiddleware, usuarioController.updateUser);
 
/**
* @swagger
* /users/{id}:
*   delete:
*     summary: Eliminar un usuario
*     description: Elimina un usuario existente.
*     tags:
*       - Usuarios
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       204:
*         description: Usuario eliminado exitosamente.
*       400:
*         description: Error en la solicitud.
*/
router.delete('/:id', authMiddleware, usuarioController.deleteUser);


export default router;
