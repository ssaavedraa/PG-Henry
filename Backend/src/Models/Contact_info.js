const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
	sequelize.define('contact_info', {
		telephone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		postCode: {
			type: DataTypes.STRING,
		},
		city: {
			type: DataTypes.STRING,
		},
		street: {
			type: DataTypes.STRING,
		},
		streetNumber: {
			type: DataTypes.STRING,
		},
		floor: {
			type: DataTypes.STRING,
		},
		unit: {
			type: DataTypes.STRING,
		},
	})
}
