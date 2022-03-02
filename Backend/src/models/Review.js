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
        allowNull: false,
        validate: {
          max: 5,
          min: 1
        }
      }
  });
};