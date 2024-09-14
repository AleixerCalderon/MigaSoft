import { Sequelize, DataTypes } from 'sequelize';

const TrasladosModel = function (sequelize) {
  const Traslado = sequelize.define('Traslados', {
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
      allowNull: false,
      defaultValue: Sequelize.NOW
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: "Por Confirmar"
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
  Traslado.associate = (models) => {
    Traslado.hasMany(models.DetalleTraslados, {
      foreignKey: 'idTraslado',
      as: 'Detalles'
    });
    Traslado.belongsTo(models.Bodegas, {
      foreignKey: 'idBodegaOrigen',
      as: 'BodegaOrigen'
    });
    Traslado.belongsTo(models.Bodegas, {
      foreignKey: 'idBodegaDestino',
      as: 'BodegaDestino'
    });    
  }
  return Traslado;
};
export default TrasladosModel;