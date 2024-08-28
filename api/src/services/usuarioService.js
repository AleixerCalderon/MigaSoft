import UsuarioRepository from '../repositories/UsuarioRepository.js';

class UsuarioService {
    async getUserById(id) {
        return await UsuarioRepository.getUserById(id);
    }
    async updateUser(id, data) {
        return await UsuarioRepository.updateUser(id, data);
    }
    async deleteUser(id) {
        return await UsuarioRepository.deleteUser(id);
    }
}
export default new UsuarioService();