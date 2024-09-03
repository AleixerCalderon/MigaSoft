import config  from "../config/config.js";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(config.development);

// importacion de los modelos
import usuarioModel from './usuario.js'
import personaModel from './persona.js'
import tipoIdentificacionModel from './tiposIdentificacion.js'

import RolesModel from './Roles.js';
//import RolesUsuarioModel from './RolesUsuario.js';

// instancia del modelo
const User = usuarioModel(sequelize);
const persona = personaModel(sequelize);
const roles = RolesModel(sequelize);

//const rolesUsuario = RolesUsuarioModel(sequelize);

const tipoIdentificacion = tipoIdentificacionModel(sequelize);

sequelize.sync();
export { sequelize, User, persona, tipoIdentificacion , roles };