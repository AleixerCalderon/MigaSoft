import {Sequelize, DataTypes } from 'sequelize';

const DetalleVentasModel = function(sequelize) {
  return sequelize.define('DetalleVentas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idVenta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Ventas',
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
    tableName: 'DetalleVentas',
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
        name: "FK_DetalleVentas_Ventas",
        using: "BTREE",
        fields: [
          { name: "idVenta" },
        ]
      },
      {
        name: "FK_DetalleVentas_Lotes",
        using: "BTREE",
        fields: [
          { name: "idLote" },
        ]
      },
    ]
  });
};
export default DetalleVentasModel;