import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userRepository from '../repositories/usuarioRepository.js';
import router from '../routes/authRoutes.js';
const { JWT_SECRET } = process.env;

class AuthService {
  async login(usuario, hashClave) {
    const user = await userRepository.getUserByUsername(usuario);
    if (!user || !(await user.validPassword(hashClave))) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user.id, usuario: user.usuario }, JWT_SECRET, { expiresIn: '1h' });
    return { token };
  }

  async register(data) {
    return await userRepository.createUser(data);
  }
}
export default new AuthService();