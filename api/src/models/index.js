import config  from "../config/config.js";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(config.development);

// importacion de los modelos
import usuarioModel from './usuario.js'
import personaModel from './persona.js'
import tipoIdentificacionModel from './tiposIdentificacion.js'

// instancia del modelo
const User = usuarioModel(sequelize);
const persona = personaModel(sequelize);
const tipoIdentificacion = tipoIdentificacionModel(sequelize);

sequelize.sync();
export { sequelize, User, persona, tipoIdentificacion };