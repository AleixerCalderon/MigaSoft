import {Sequelize, DataTypes } from 'sequelize';

const personaModel = function(sequelize) {
    const Persona =  sequelize.define('Personas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nacionalidad: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    identificacion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    idTipoIdentificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TiposIdentificacion',
        key: 'id'
      }
    },
    telefono: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "correo"
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(250),
      allowNull: false
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
    tableName: 'Personas',
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
        name: "correo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "correo" },
        ]
      },
      {
        name: "FK_Persona_TipoIdentificacion",
        using: "BTREE",
        fields: [
          { name: "idTipoIdentificacion" },
        ]
      },
    ]
  });
  Persona.associate = (models)=>{
    Persona.hasOne(models.User,{
      foreignKey:'idPersona', 
      as:  'usuario'
    });
  };
  return Persona;
};
export default personaModel;