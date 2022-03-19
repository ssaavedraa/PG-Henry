const { DataTypes } = require("sequelize");
const { hashSync, compareSync } = require("bcrypt");

module.exports = (sequelize) => {
  sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    profilePicture: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      set(password) {
        this.setDataValue("password", hashSync(password, 10));
      },
    },
    isBanned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("guest", "admin", "user"),
      allowNull: false,
    },
    googleUser: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  });
};
