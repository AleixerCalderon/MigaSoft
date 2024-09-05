import config  from "../config/config.js";
import { Sequelize } from "sequelize";
const sequelize = new Sequelize(config.development);

// importacion de los modelos
import usuarioModel from './usuario.js'
import personaModel from './persona.js'
import tipoIdentificacionModel from './tiposIdentificacion.js'

import RolesModel from './Roles.js';
import RolesUsuarioModel from './RolesUsuario.js';
import BodegasModel from "./Bodegas.js";
import TiposBodegaModel from "./TiposBodega.js";

// instancia del modelo
const User = usuarioModel(sequelize);
const Persona = personaModel(sequelize);
const Roles = RolesModel(sequelize);
const RolesUsuario = RolesUsuarioModel(sequelize);
const Bodegas = BodegasModel(sequelize);
const TiposBodega = TiposBodegaModel(sequelize);

//Asociar
User.associate({Persona,Roles,RolesUsuario});
Persona.associate({User});
Roles.associate({User, RolesUsuario});
Bodegas.associate({TiposBodega});
TiposBodega.associate({Bodegas});

const tipoIdentificacion = tipoIdentificacionModel(sequelize);

sequelize.sync();
export { sequelize, User, Persona, tipoIdentificacion , Roles, RolesUsuario, Bodegas, TiposBodega };