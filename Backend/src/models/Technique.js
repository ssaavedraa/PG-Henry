const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("technique", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
		},
	});
};
