import usuarioService from '../services/usuarioService.js';

class UsuarioController {
    async getUsers(req, res) {
        try {
            const users = await usuarioService.getUsers();
            res.json(users);
        } catch (error) {
            res.status(404).json({ error: 'Users not found' });
        }
    }
    async getUser(req, res) {
        try {
            const user = await usuarioService.getUserById(req.params.id);
            res.json(user);
        } catch (error) {
            res.status(404).json({ error: 'User not found' });
        }
    }

    async updateUser(req, res) {
        try {
            const user = await usuarioService.updateUser(req.params.id, req.body);
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            await usuarioService.deleteUser(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
export default new UsuarioController();
