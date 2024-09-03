import {Sequelize, DataTypes } from 'sequelize';

const RolesModel = function(sequelize) {
  const Roles = sequelize.define('Roles', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
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
    tableName: 'Roles',
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
  Roles.associate = (models)=> {
    Roles.belongsToMany(models.User,{
      through:models.RolesUsuario,
      foreignKey: 'idRol',
      otherKey: 'idUsuario',
      as:'usuarios'
    });
  };
  return Roles;
};
export default RolesModel;