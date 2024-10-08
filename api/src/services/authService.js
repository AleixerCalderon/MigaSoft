import jwt from 'jsonwebtoken';
import userRepository from '../repositories/usuarioRepository.js';
const { JWT_SECRET } = process.env;

class AuthService {
  async login(usuario, hashClave) {
    const user = await userRepository.getUserByUsername(usuario);
    if (!user || !(await user.validPassword(hashClave))) {
      throw new Error('Error de autenticación');
    }

    const nombre = user.Personas?.nombre || '';
    const apellido = user.Personas?.apellido || '';
    const roles = user.Roles.map(rol => rol.descripcion);

    const token = jwt.sign(
      {
        id: user.id,
        usuario: user.usuario,
        nombre,
        apellido,
        roles
      },
      JWT_SECRET,
      { expiresIn: '8h' });
    return { 
      token,
      user:{
        id: user.id,
        usuario: user.usuario,
        nombre,
        apellido,
        roles
      }
    };
  }

  async register(data) {
    return await userRepository.createUser(data);
  }
}
export default new AuthService();