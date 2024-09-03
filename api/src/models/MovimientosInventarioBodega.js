import {Sequelize, DataTypes } from 'sequelize';

const MovimientosInventarioBodegaModel = function(sequelize) {
  return sequelize.define('MovimientosInventarioBodega', {
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
    fechaMovimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tipoMovimiento: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
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
    tableName: 'MovimientosInventarioBodega',
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
        name: "FK_MovimientosInventarioBodega_Bodega",
        using: "BTREE",
        fields: [
          { name: "idBodega" },
        ]
      },
      {
        name: "FK_MovimientosInventarioBodega_Lotes",
        using: "BTREE",
        fields: [
          { name: "idLote" },
        ]
      },
    ]
  });
};
export default MovimientosInventarioBodegaModel;