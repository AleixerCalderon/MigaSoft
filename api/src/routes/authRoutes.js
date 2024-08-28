import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Inicia sesión y devuelve un token JWT. Ejemplo  {\"usuario\" ; \"aab\", \"hashClave\"; \"Migasoft\" } 
 *     tags:
 *       - Autenticación
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
*         description: Inicio de sesión exitoso.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 token:
*                   type: string
*       400:
*         description: Credenciales inválidas.
*/
router.post('/login', authController.login);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     description: Registra un nuevo usuario en la base de datos. ejemplo {\"idPersona\" ; 1, \"usuario\" ; \"aab\", \"hashClave\"; \"Migasoft\"}  Para registrar una persona nueva debe usar el id de una persona existente.
 *     tags:
 *       - Autenticación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idPersona:
 *                 type: integer
 *               usuario:
 *                 type: string
 *               hashClave:
 *                 type: string
 *     responses:
 *       200:
 *         description: Registro exitoso.
 *       400:
 *         description: Error en la solicitud.
 */
router.post('/register', authController.register);

export default router;

