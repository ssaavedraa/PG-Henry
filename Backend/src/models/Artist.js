const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("artist", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    biography: {
      type: DataTypes.TEXT,
    },
    photo: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    location: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.FLOAT,
      defaultValue: 3,
      validate: {
        max: 5,
        min: 1,
      },
    },
  });
};
