const getToday = () => {
  const today = new Date();
  return `${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;
};

module.exports = getToday;
