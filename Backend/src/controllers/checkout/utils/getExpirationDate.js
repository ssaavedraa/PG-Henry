const getExpirationDate = () => {
	let date = new Date();
	date.setDate(date.getDate() + 3);

	return date;
};

module.exports = getExpirationDate;
