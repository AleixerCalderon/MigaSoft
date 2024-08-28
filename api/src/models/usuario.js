import  {DataTypes}  from 'sequelize';
import bcrypt from 'bcryptjs';

const usuarioModel = (sequelize) => {
    const User = sequelize.define('Usuarios', {
        idPersona: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        hashClave: {
            type: DataTypes.CHAR,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        hooks: {
            beforeCreate: async (user) => {
                const salt = await bcrypt.genSalt(10);
                user.hashClave = await bcrypt.hash(user.hashClave, salt);
            },
            beforeUpdate: async (user) => {
                if(user.changed('hashClave')){      
                    console.log("Cambio")             
                    const salt = await bcrypt.genSalt(10);
                user.hashClave = await bcrypt.hash(user.hashClave, salt);
                }else {
                    console.log("No Cambio")             
                }
            },
        },
    });
    User.prototype.validPassword = async function (hashClave) {
        return await bcrypt.compare(hashClave, this.hashClave);
    };
    return User;
};
export default usuarioModel;