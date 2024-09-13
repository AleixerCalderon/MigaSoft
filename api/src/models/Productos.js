import {Sequelize, DataTypes } from 'sequelize';

const ProductosModel = function(sequelize) {
  const Productos = sequelize.define('Productos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    peso: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    volumen: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    },
    PrecioUnitario: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    PrecioVenta: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
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
    tableName: 'Productos',
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
  return Productos;
};
export default ProductosModel;