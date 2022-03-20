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
      type: DataTypes.STRING,
    },
    pendingDate: {
      type: DataTypes.STRING,
    },
    dispatchedDate: {
      type: DataTypes.STRING,
    },
    completedDate: {
      type: DataTypes.STRING,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
    },
    payment_id: {
      type: DataTypes.INTEGER,
    },
  });
};
