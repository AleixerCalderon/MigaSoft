import jwt from 'jsonwebtoken';
import userRepository from '../repositories/usuarioRepository.js';
const { JWT_SECRET } = process.env;

class AuthService {
  async login(usuario, hashClave) {
    const user = await userRepository.getUserByUsername(usuario);
    if (!user || !(await user.validPassword(hashClave))) {
      throw new Error('Error de autenticación');
    }
    console.log(user);//TODO
    const token = jwt.sign({ id: user.id, usuario: user.usuario }, JWT_SECRET, { expiresIn: '8h' });
    return { token };
  }

  async register(data) {
    return await userRepository.createUser(data);
  }
}
export default new AuthService();