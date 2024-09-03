import { User, Persona, Roles } from '../models/index.js';


class UsuarioRepository {
  async createUser(data) {
    return await User.create(data);
  }

  async getUserByUsername(usuario) {
    return await User.findOne({ where: { usuario },
    include:[
      {
        model:Persona,
        as:'Personas',
        attributes:['nombre','apellido'],
      },
      {
        model:Roles,
        as :'Roles',
        through:{attributes:[]},
        attributes:['descripcion'],
      }
    ],});
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
