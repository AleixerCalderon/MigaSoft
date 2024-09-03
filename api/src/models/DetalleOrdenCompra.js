import {Sequelize, DataTypes } from 'sequelize';

const DetalleOrdenCompraModel = function(sequelize) {
  return sequelize.define('DetalleOrdenCompra', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idOrdenCompra: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'OrdenCompra',
        key: 'id'
      }
    },
    idLote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Lotes',
        key: 'id'
      }
    },
    Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PrecioUnitario: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    PrecioVenta: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    Iva: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    porcentajeDescuento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
  }, {
    sequelize,
    tableName: 'DetalleOrdenCompra',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "FK_DetalleOrdenCompra_OrdenCompra",
        using: "BTREE",
        fields: [
          { name: "idOrdenCompra" },
        ]
      },
      {
        name: "FK_DetalleOrdenCompra_Lotes",
        using: "BTREE",
        fields: [
          { name: "idLote" },
        ]
      },
    ]
  });
};
export default DetalleOrdenCompraModel;