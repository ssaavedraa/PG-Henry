const { DataTypes } = require('sequelize');



module.exports = (sequelize) => {
  sequelize.define('review', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT
      },
      score: {
        type: DataTypes.INTEGER,
        max: 5,
        min: 1,
        allowNull: false
      }
  });
};