import { Sequelize, DataTypes } from 'sequelize';

const BodegasModel = function(sequelize) {
  const Bodega = sequelize.define('Bodegas', {
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
    habilitado:{
      type: DataTypes.BOOLEAN,
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
  Bodega.associate = (models)=> {
    Bodega.belongsTo(models.TiposBodega, {
      foreignKey: 'idTipoBodega',
      as: 'tiposBodega'
  });   
  };
  return Bodega;
};
export default BodegasModel;