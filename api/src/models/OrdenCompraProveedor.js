import {Sequelize, DataTypes } from 'sequelize';

const OrdenCompraProveedorModel = function(sequelize) {
  return sequelize.define('OrdenCompraProveedor', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idProveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Proveedores',
        key: 'id'
      }
    },
    fechaOrdenCompra: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaEntrega: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    idBodegaIngreso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Bodegas',
        key: 'id'
      }
    },
    totalValor: {
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
    tableName: 'OrdenCompraProveedor',
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
        name: "FK_OrdenCompraProveedor_Proveedores",
        using: "BTREE",
        fields: [
          { name: "idProveedor" },
        ]
      },
      {
        name: "FK_OrdenCompraProveedor_Bodegas",
        using: "BTREE",
        fields: [
          { name: "idBodegaIngreso" },
        ]
      },
    ]
  });
};
export default OrdenCompraProveedorModel;