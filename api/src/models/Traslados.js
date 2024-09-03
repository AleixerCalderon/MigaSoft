import {Sequelize, DataTypes } from 'sequelize';

const TrasladosModel = function(sequelize) {
  return sequelize.define('Traslados', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idBodegaOrigen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Bodegas',
        key: 'id'
      }
    },
    idBodegaDestino: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Bodegas',
        key: 'id'
      }
    },
    fechaTraslado: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(150),
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
    tableName: 'Traslados',
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
        name: "FK_Traslados_Bodegas_O",
        using: "BTREE",
        fields: [
          { name: "idBodegaOrigen" },
        ]
      },
      {
        name: "FK_Traslados_Bodegas_D",
        using: "BTREE",
        fields: [
          { name: "idBodegaDestino" },
        ]
      },
    ]
  });
};
export default TrasladosModel;