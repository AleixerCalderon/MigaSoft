import {Sequelize, DataTypes } from 'sequelize';

const OrdenCompraModel = function(sequelize) {
  return sequelize.define('OrdenCompra', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FechaVenta: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    idCliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Clientes',
        key: 'id'
      }
    },
    idVendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Vendedores',
        key: 'id'
      }
    },
    idBodegaOrigen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Bodegas',
        key: 'id'
      }
    },
    TotalVenta: {
      type: DataTypes.DECIMAL(18,2),
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
    tableName: 'OrdenCompra',
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
        name: "FK_OrdenCompra_Clientes",
        using: "BTREE",
        fields: [
          { name: "idCliente" },
        ]
      },
      {
        name: "FK_OrdenCompra_Vendedores",
        using: "BTREE",
        fields: [
          { name: "idVendedor" },
        ]
      },
      {
        name: "FK_OrdenCompra_Bodegas",
        using: "BTREE",
        fields: [
          { name: "idBodegaOrigen" },
        ]
      },
    ]
  });
};
export default OrdenCompraModel;