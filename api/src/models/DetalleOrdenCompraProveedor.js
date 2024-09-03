import {Sequelize, DataTypes } from 'sequelize';

const DetalleOrdenCompraProveedorModel = function(sequelize) {
  return sequelize.define('DetalleOrdenCompraProveedor', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idOrdenCompraProveedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'OrdenCompraProveedor',
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
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Precio: {
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
    tableName: 'DetalleOrdenCompraProveedor',
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
        name: "FK_DetalleOrdenCompraProveedor_OrdenCompraProveedor",
        using: "BTREE",
        fields: [
          { name: "idOrdenCompraProveedor" },
        ]
      },
      {
        name: "FK_DetalleOrdenCompraProveedor_Lotes",
        using: "BTREE",
        fields: [
          { name: "idLote" },
        ]
      },
    ]
  });
};
export default DetalleOrdenCompraProveedorModel;