import {Sequelize, DataTypes } from 'sequelize';

const InventariosBodegaModel = function(sequelize) {
  const Inventario = sequelize.define('InventariosBodega', {
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
    // createdAt: {
    //     type: DataTypes.DATE,
    //     allowNull: true,
    //     defaultValue: Sequelize.NOW
    // },
    // updatedAt: {
    //     type: DataTypes.DATE,
    //     allowNull: true,
    //     defaultValue: Sequelize.NOW
    // }
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
  Inventario.associate = (models)=> {
    Inventario.belongsTo(models.Bodegas, {
      foreignKey: 'idBodega',
      as: 'Bodega'
  });  
  Inventario.belongsTo(models.Lotes, {
    foreignKey: 'idLote',
    as: 'Lote'
});   
  };
  return Inventario;
};
export default InventariosBodegaModel;