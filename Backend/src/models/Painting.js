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
		height: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		width: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		orientation: {
			type: DataTypes.VIRTUAL,
			get() {
				if (this.height > this.width) {
					return "vertical"
				} else if (this.height < this.width) {
					return "horizontal"
				} else {
					return "square"
				}
			}
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
