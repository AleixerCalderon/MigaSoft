import { Sequelize, DataTypes } from 'sequelize';

const LotesModel = function (sequelize) {
  const Lotes = sequelize.define('Lotes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Productos',
        key: 'id'
      }
    },
    FechaEntrada: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    FechaVencimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    CodigoLote: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CodigoBarras: {
      type: DataTypes.STRING(255),
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
    tableName: 'Lotes',
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
        name: "FK_Lote_Productos",
        using: "BTREE",
        fields: [
          { name: "idProducto" },
        ]
      },
    ]
  });
  Lotes.associate = (models) => {
    Lotes.belongsTo(models.Productos, {
      foreignKey: 'idProducto',
      as: 'Producto'
    });
  };
  return Lotes;
};
export default LotesModel;