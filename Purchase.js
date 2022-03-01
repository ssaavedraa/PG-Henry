const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
	sequelize.define('purchase', {
		purchaseDate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		state: {
			type: DataTypes.ENUM('pending', 'dispatched', 'canceled', 'completed'),
		},
		canceledDate: {
			type: DataTypes.DATE,
		},
		dispatchedDate: {
			type: DataTypes.DATE,
		},
		completedDate: {
			type: DataTypes.DATE,
		},
		totalPrice: {
			type: DataTypes.FLOAT,
		},
	})
}
