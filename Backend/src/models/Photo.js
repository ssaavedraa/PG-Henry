const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("photo", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altText: {
      type: DataTypes.TEXT,
    },
  });
};
