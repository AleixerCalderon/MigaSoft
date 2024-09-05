import {Sequelize, DataTypes } from 'sequelize';

const RolesUsuarioModel = function(sequelize) {
  const RolesUsuario = sequelize.define('RolesUsuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuarios',
        key: 'id'
      }
    },
    idRol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id'
      }
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
    tableName: 'RolesUsuario',
    timestamps: false,
    // indexes: [
    //   {
    //     name: "PRIMARY",
    //     unique: true,
    //     using: "BTREE",
    //     fields: [
    //       { name: "id" },
    //     ]
    //   },
    //   {
    //     name: "FK_RolesUsuario_Usuarios",
    //     using: "BTREE",
    //     fields: [
    //       { name: "idUsuario" },
    //     ]
    //   },
    //   {
    //     name: "FK_RolesUsuario_Roles",
    //     using: "BTREE",
    //     fields: [
    //       { name: "idRol" },
    //     ]
    //   },
    // ]
  });
  return RolesUsuario;
};

export default RolesUsuarioModel;