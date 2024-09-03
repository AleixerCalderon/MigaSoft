import {Sequelize, DataTypes } from 'sequelize';

const InventariosBodegaModel = function(sequelize) {
  return sequelize.define('InventariosBodega', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idBodega: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Bodegas',
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
    tableName: 'InventariosBodega',
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
        name: "FK_InventariosBodega_Bodegas",
        using: "BTREE",
        fields: [
          { name: "idBodega" },
        ]
      },
      {
        name: "FK_InventariosBodega_Lote",
        using: "BTREE",
        fields: [
          { name: "idLote" },
        ]
      },
    ]
  });
};
export default InventariosBodegaModel;