const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
	sequelize.define('contact_info', {
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
	})
}
