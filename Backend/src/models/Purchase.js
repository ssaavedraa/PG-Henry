const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("purchase", {
		state: {
			type: DataTypes.ENUM(
				"pending",
				"dispatched",
				"canceled",
				"completed",
				"processing"
			),
		},
		canceledDate: {
			type: DataTypes.DATE,
		},
		pendingDate: {
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
		payment_id: {
			type: DataTypes.INTEGER,
		},
	});
};
