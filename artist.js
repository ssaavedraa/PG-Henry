const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
  sequelize.define('artist', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      biography: {
        type: DataTypes.TEXT
      },
      photo: {
        type: DataTypes.STRING,
        isUrl: true
      },
      email: {
        type: DataTypes.STRING,
        isEmail: true
      },
      score: {
        type: DataTypes.INTEGER,
        max: 5,
        min: 1
      }
  });
};