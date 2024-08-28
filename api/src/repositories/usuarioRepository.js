import { User } from '../models/index.js';

class UsuarioRepository {
  async createUser(data) {
    return await User.create(data);
  }

  async getUserByUsername(usuario) {
    return await User.findOne({ where: { usuario } });
  }

  async getUserById(id) {
    return await User.findByPk(id);
  }

  async updateUser(id, data) {
    return await User.update(data, { where: { id }, individualHooks: true, });
  }

  async deleteUser(id) {
    return await User.destroy({ where: { id } });
  }
}

export default new UsuarioRepository();
