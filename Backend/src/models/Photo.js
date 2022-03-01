const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
	sequelize.define('photo', {
		Url: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		altText: {
			type: DataTypes.TEXT,
		},
	})
}
