import {Sequelize, DataTypes } from 'sequelize';

const TiposBodegaModel = function(sequelize) {
  const TiposBodega = sequelize.define('TiposBodega', {
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
    ubicacion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
    }
  }, {
    sequelize,
    tableName: 'TiposBodega',
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
    ]
  });
  TiposBodega.associate = (models)=>{
    TiposBodega.hasMany(models.Bodegas,{
      foreignKey:'idTipoBodega', 
      as:  'Bodega'
    });
  };
  return TiposBodega;
};
export default TiposBodegaModel;