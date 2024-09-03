import {Sequelize, DataTypes } from 'sequelize';

const DetalleTrasladosModel = function(sequelize) {
  return sequelize.define('DetalleTraslados', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idTraslado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Traslados',
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
    tableName: 'DetalleTraslados',
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
        name: "FK_DetalleTraslados_Traslados",
        using: "BTREE",
        fields: [
          { name: "idTraslado" },
        ]
      },
      {
        name: "FK_DetalleTraslados_Lotes",
        using: "BTREE",
        fields: [
          { name: "idLote" },
        ]
      },
    ]
  });
};
export default DetalleTrasladosModel;