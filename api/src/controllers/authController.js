import authService from '../services/authService.js';

class AuthController {
    async login(req, res) {
        try {
            const { usuario, hashClave } = req.body;
            const result = await authService.login(usuario, hashClave);
            res.json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async register(req, res) {
        try {
            const user = await authService.register(req.body);
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new AuthController();
