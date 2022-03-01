const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
	sequelize.define('painting', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
		},
		orientation: {
			type: DataTypes.ENUM('vertical', 'horizontal'),
			allowNull: false,
		},
		height: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		width: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		isAvailable: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
	})
}
