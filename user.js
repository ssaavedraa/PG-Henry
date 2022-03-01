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
        isEmail: true,
        allowNull: false
      },
      profilePicture: {
        type: DataTypes.STRING,
        isUrl: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isBanned: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      role: {
        type: DataTypes.ENUM("guest", "admin", "user"),
        allowNull: false
      }
  });
};