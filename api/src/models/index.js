import { Sequelize } from "sequelize";
import config  from "../config/config.js";
const sequelize = new Sequelize(config.development);
import usuarioModel from './usuario.js'


const User = usuarioModel(sequelize);
sequelize.sync();
export { sequelize, User };