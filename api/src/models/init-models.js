import {Sequelize, DataTypes } from 'sequelize';

var DataTypes = require("sequelize").DataTypes;
var _Bodegas = require("./Bodegas");
var _Clientes = require("./Clientes");
var _DetalleOrdenCompra = require("./DetalleOrdenCompra");
var _DetalleOrdenCompraProveedor = require("./DetalleOrdenCompraProveedor");
var _DetalleTraslados = require("./DetalleTraslados");
var _DetalleVentas = require("./DetalleVentas");
var _InventariosBodega = require("./InventariosBodega");
var _Lotes = require("./Lotes");
var _MovimientosInventarioBodega = require("./MovimientosInventarioBodega");
var _OrdenCompra = require("./OrdenCompra");
var _OrdenCompraProveedor = require("./OrdenCompraProveedor");
var _Personas = require("./Personas");
var _Productos = require("./Productos");
var _Proveedores = require("./Proveedores");
var _Roles = require("./Roles");
var _RolesUsuario = require("./RolesUsuario");
var _TiposBodega = require("./TiposBodega");
var _TiposIdentificacion = require("./TiposIdentificacion");
var _Traslados = require("./Traslados");
var _Users = require("./Users");
var _Usuarios = require("./Usuarios");
var _Vendedores = require("./Vendedores");
var _Ventas = require("./Ventas");

function initModels(sequelize) {
  var Bodegas = _Bodegas(sequelize, DataTypes);
  var Clientes = _Clientes(sequelize, DataTypes);
  var DetalleOrdenCompra = _DetalleOrdenCompra(sequelize, DataTypes);
  var DetalleOrdenCompraProveedor = _DetalleOrdenCompraProveedor(sequelize, DataTypes);
  var DetalleTraslados = _DetalleTraslados(sequelize, DataTypes);
  var DetalleVentas = _DetalleVentas(sequelize, DataTypes);
  var InventariosBodega = _InventariosBodega(sequelize, DataTypes);
  var Lotes = _Lotes(sequelize, DataTypes);
  var MovimientosInventarioBodega = _MovimientosInventarioBodega(sequelize, DataTypes);
  var OrdenCompra = _OrdenCompra(sequelize, DataTypes);
  var OrdenCompraProveedor = _OrdenCompraProveedor(sequelize, DataTypes);
  var Personas = _Personas(sequelize, DataTypes);
  var Productos = _Productos(sequelize, DataTypes);
  var Proveedores = _Proveedores(sequelize, DataTypes);
  var Roles = _Roles(sequelize, DataTypes);
  var RolesUsuario = _RolesUsuario(sequelize, DataTypes);
  var TiposBodega = _TiposBodega(sequelize, DataTypes);
  var TiposIdentificacion = _TiposIdentificacion(sequelize, DataTypes);
  var Traslados = _Traslados(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);
  var Usuarios = _Usuarios(sequelize, DataTypes);
  var Vendedores = _Vendedores(sequelize, DataTypes);
  var Ventas = _Ventas(sequelize, DataTypes);

  InventariosBodega.belongsTo(Bodegas, { as: "idBodega_Bodega", foreignKey: "idBodega"});
  Bodegas.hasMany(InventariosBodega, { as: "InventariosBodegas", foreignKey: "idBodega"});
  MovimientosInventarioBodega.belongsTo(Bodegas, { as: "idBodega_Bodega", foreignKey: "idBodega"});
  Bodegas.hasMany(MovimientosInventarioBodega, { as: "MovimientosInventarioBodegas", foreignKey: "idBodega"});
  OrdenCompra.belongsTo(Bodegas, { as: "idBodegaOrigen_Bodega", foreignKey: "idBodegaOrigen"});
  Bodegas.hasMany(OrdenCompra, { as: "OrdenCompras", foreignKey: "idBodegaOrigen"});
  OrdenCompraProveedor.belongsTo(Bodegas, { as: "idBodegaIngreso_Bodega", foreignKey: "idBodegaIngreso"});
  Bodegas.hasMany(OrdenCompraProveedor, { as: "OrdenCompraProveedors", foreignKey: "idBodegaIngreso"});
  Traslados.belongsTo(Bodegas, { as: "idBodegaDestino_Bodega", foreignKey: "idBodegaDestino"});
  Bodegas.hasMany(Traslados, { as: "Traslados", foreignKey: "idBodegaDestino"});
  Traslados.belongsTo(Bodegas, { as: "idBodegaOrigen_Bodega", foreignKey: "idBodegaOrigen"});
  Bodegas.hasMany(Traslados, { as: "idBodegaOrigen_Traslados", foreignKey: "idBodegaOrigen"});
  Ventas.belongsTo(Bodegas, { as: "idBodegaOrigen_Bodega", foreignKey: "idBodegaOrigen"});
  Bodegas.hasMany(Ventas, { as: "Venta", foreignKey: "idBodegaOrigen"});
  OrdenCompra.belongsTo(Clientes, { as: "idCliente_Cliente", foreignKey: "idCliente"});
  Clientes.hasMany(OrdenCompra, { as: "OrdenCompras", foreignKey: "idCliente"});
  Ventas.belongsTo(Clientes, { as: "idCliente_Cliente", foreignKey: "idCliente"});
  Clientes.hasMany(Ventas, { as: "Venta", foreignKey: "idCliente"});
  DetalleOrdenCompra.belongsTo(Lotes, { as: "idLote_Lote", foreignKey: "idLote"});
  Lotes.hasMany(DetalleOrdenCompra, { as: "DetalleOrdenCompras", foreignKey: "idLote"});
  DetalleOrdenCompraProveedor.belongsTo(Lotes, { as: "idLote_Lote", foreignKey: "idLote"});
  Lotes.hasMany(DetalleOrdenCompraProveedor, { as: "DetalleOrdenCompraProveedors", foreignKey: "idLote"});
  DetalleTraslados.belongsTo(Lotes, { as: "idLote_Lote", foreignKey: "idLote"});
  Lotes.hasMany(DetalleTraslados, { as: "DetalleTraslados", foreignKey: "idLote"});
  DetalleVentas.belongsTo(Lotes, { as: "idLote_Lote", foreignKey: "idLote"});
  Lotes.hasMany(DetalleVentas, { as: "DetalleVenta", foreignKey: "idLote"});
  InventariosBodega.belongsTo(Lotes, { as: "idLote_Lote", foreignKey: "idLote"});
  Lotes.hasMany(InventariosBodega, { as: "InventariosBodegas", foreignKey: "idLote"});
  MovimientosInventarioBodega.belongsTo(Lotes, { as: "idLote_Lote", foreignKey: "idLote"});
  Lotes.hasMany(MovimientosInventarioBodega, { as: "MovimientosInventarioBodegas", foreignKey: "idLote"});
  DetalleOrdenCompra.belongsTo(OrdenCompra, { as: "idOrdenCompra_OrdenCompra", foreignKey: "idOrdenCompra"});
  OrdenCompra.hasMany(DetalleOrdenCompra, { as: "DetalleOrdenCompras", foreignKey: "idOrdenCompra"});
  DetalleOrdenCompraProveedor.belongsTo(OrdenCompraProveedor, { as: "idOrdenCompraProveedor_OrdenCompraProveedor", foreignKey: "idOrdenCompraProveedor"});
  OrdenCompraProveedor.hasMany(DetalleOrdenCompraProveedor, { as: "DetalleOrdenCompraProveedors", foreignKey: "idOrdenCompraProveedor"});
  Clientes.belongsTo(Personas, { as: "idPersona_Persona", foreignKey: "idPersona"});
  Personas.hasMany(Clientes, { as: "Clientes", foreignKey: "idPersona"});
  Usuarios.belongsTo(Personas, { as: "idPersona_Persona", foreignKey: "idPersona"});
  Personas.hasMany(Usuarios, { as: "Usuarios", foreignKey: "idPersona"});
  Vendedores.belongsTo(Personas, { as: "idPersona_Persona", foreignKey: "idPersona"});
  Personas.hasMany(Vendedores, { as: "Vendedores", foreignKey: "idPersona"});
  Lotes.belongsTo(Productos, { as: "idProducto_Producto", foreignKey: "idProducto"});
  Productos.hasMany(Lotes, { as: "Lotes", foreignKey: "idProducto"});
  OrdenCompraProveedor.belongsTo(Proveedores, { as: "idProveedor_Proveedore", foreignKey: "idProveedor"});
  Proveedores.hasMany(OrdenCompraProveedor, { as: "OrdenCompraProveedors", foreignKey: "idProveedor"});
  RolesUsuario.belongsTo(Roles, { as: "idRol_Role", foreignKey: "idRol"});
  Roles.hasMany(RolesUsuario, { as: "RolesUsuarios", foreignKey: "idRol"});
  Bodegas.belongsTo(TiposBodega, { as: "idTipoBodega_TiposBodega", foreignKey: "idTipoBodega"});
  TiposBodega.hasMany(Bodegas, { as: "Bodegas", foreignKey: "idTipoBodega"});
  Personas.belongsTo(TiposIdentificacion, { as: "idTipoIdentificacion_TiposIdentificacion", foreignKey: "idTipoIdentificacion"});
  TiposIdentificacion.hasMany(Personas, { as: "Personas", foreignKey: "idTipoIdentificacion"});
  DetalleTraslados.belongsTo(Traslados, { as: "idTraslado_Traslado", foreignKey: "idTraslado"});
  Traslados.hasMany(DetalleTraslados, { as: "DetalleTraslados", foreignKey: "idTraslado"});
  RolesUsuario.belongsTo(Usuarios, { as: "idUsuario_Usuario", foreignKey: "idUsuario"});
  Usuarios.hasMany(RolesUsuario, { as: "RolesUsuarios", foreignKey: "idUsuario"});
  OrdenCompra.belongsTo(Vendedores, { as: "idVendedor_Vendedore", foreignKey: "idVendedor"});
  Vendedores.hasMany(OrdenCompra, { as: "OrdenCompras", foreignKey: "idVendedor"});
  Ventas.belongsTo(Vendedores, { as: "idVendedor_Vendedore", foreignKey: "idVendedor"});
  Vendedores.hasMany(Ventas, { as: "Venta", foreignKey: "idVendedor"});
  DetalleVentas.belongsTo(Ventas, { as: "idVenta_Venta", foreignKey: "idVenta"});
  Ventas.hasMany(DetalleVentas, { as: "DetalleVenta", foreignKey: "idVenta"});

  return {
    Bodegas,
    Clientes,
    DetalleOrdenCompra,
    DetalleOrdenCompraProveedor,
    DetalleTraslados,
    DetalleVentas,
    InventariosBodega,
    Lotes,
    MovimientosInventarioBodega,
    OrdenCompra,
    OrdenCompraProveedor,
    Personas,
    Productos,
    Proveedores,
    Roles,
    RolesUsuario,
    TiposBodega,
    TiposIdentificacion,
    Traslados,
    Users,
    Usuarios,
    Vendedores,
    Ventas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
