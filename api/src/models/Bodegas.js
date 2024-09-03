import {Sequelize, DataTypes } from 'sequelize';

const BodegasModel = function(sequelize) {
  return sequelize.define('Bodegas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idTipoBodega: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TiposBodega',
        key: 'id'
      }
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
    tableName: 'Bodegas',
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
        name: "FK_Bodegas_TiposBodega",
        using: "BTREE",
        fields: [
          { name: "idTipoBodega" },
        ]
      },
    ]
  });
};
export default BodegasModel;