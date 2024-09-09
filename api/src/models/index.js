import config from "../config/config.js";
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
import InventariosBodegaModel from "./InventariosBodega.js";
import LotesModel from "./Lotes.js";
import ProductosModel from "./Productos.js";
import TrasladosModel from "./Traslados.js";
import DetalleTrasladosModel from "./DetalleTraslados.js";

// instancia del modelo
const User = usuarioModel(sequelize);
const Persona = personaModel(sequelize);
const Roles = RolesModel(sequelize);
const RolesUsuario = RolesUsuarioModel(sequelize);
const Bodegas = BodegasModel(sequelize);
const TiposBodega = TiposBodegaModel(sequelize);
const Inventario = InventariosBodegaModel(sequelize);
const Lotes = LotesModel(sequelize);
const Productos = ProductosModel(sequelize);
const tipoIdentificacion = tipoIdentificacionModel(sequelize);
const Traslados = TrasladosModel(sequelize);
const DetalleTraslados = DetalleTrasladosModel(sequelize);

//Asociar
User.associate({ Persona, Roles, RolesUsuario });
Persona.associate({ User });
Roles.associate({ User, RolesUsuario });
Bodegas.associate({ TiposBodega });
TiposBodega.associate({ Bodegas });
Inventario.associate({ Bodegas, Lotes });
Lotes.associate({ Productos });
Traslados.associate({ Bodegas });
DetalleTraslados.associate({ Traslados, Lotes });


sequelize.sync();
export {
    sequelize,
    User,
    Persona,
    tipoIdentificacion,
    Roles,
    RolesUsuario,
    Bodegas,
    TiposBodega,
    Inventario,
    Lotes,
    Productos,
    Traslados,
    DetalleTraslados
};