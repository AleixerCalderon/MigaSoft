import { Sequelize, DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

const usuarioModel = function (sequelize) {
    const User = sequelize.define('Usuarios', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        idPersona: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Personas',
                key: 'id'
            }
        },
        usuario: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: "usuario"
        },
        hashClave: {
            type: DataTypes.CHAR(60),
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
        tableName: 'Usuarios',
        timestamps: true,
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
                name: "usuario",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "usuario" },
                ]
            },
            {
                name: "FK_Usuarios_Personas",
                using: "BTREE",
                fields: [
                    { name: "idPersona" },
                ]
            },
        ],
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSalt(10);
                user.hashClave = await bcrypt.hash(user.hashClave, salt);
            },
            beforeUpdate: async (user) => {
                if (user.changed('hashClave')) {
                    const salt = await bcrypt.genSalt(10);
                    user.hashClave = await bcrypt.hash(user.hashClave, salt);
                }
            },
        },
    });
    User.associate = (models) => {
        User.belongsTo(models.Persona, {
            foreignKey: 'idPersona',
            as: 'Personas'
        });
        User.belongsToMany(models.Roles, {
            through: models.RolesUsuario,
            foreignKey: 'idUsuario',
            as: 'Roles'
        });
    };
    User.prototype.validPassword = async function (hashClave) {
        return await bcrypt.compare(hashClave, this.hashClave);
    };
    return User;
};
export default usuarioModel;