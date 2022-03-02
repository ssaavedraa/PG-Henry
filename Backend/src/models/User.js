const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
  sequelize.define('user', {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      profilePicture: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isBanned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM("guest", "admin", "user"),
        allowNull: false
      }
  });
};