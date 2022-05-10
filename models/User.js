const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create user model
class User extends Model {}

User.init(
    {

        // TABLE column definitions
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }

    },
    {

        // TABLE configuration options here (https://sequelize.org/v5/manual/models-definition.html#configuration))

        // Pass in imported sequelize connection

        sequelize,
        // don't automatically create timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing
        underscored: true,
        // make sure model name stays lowercase
        modeName: 'user'

    }
);

Model.exports = User;