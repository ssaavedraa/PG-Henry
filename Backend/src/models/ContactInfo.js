const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("contactInfo", {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		telephone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		postCode: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		street: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		streetNumber: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		floor: {
			type: DataTypes.STRING,
		},
		unit: {
			type: DataTypes.STRING,
		},
	});
};
