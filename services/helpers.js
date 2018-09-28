module.exports.getCurrentDay = () => {
  var today = new Date();
  var dd = fixDigits(today.getDate());
  var mm = fixDigits(today.getMonth() + 1); //January is 0!
  var yyyy = fixDigits(today.getFullYear());

  return mm + "/" + dd + "/" + yyyy;
};

let fixDigits = n => {
  return n < 10 ? "0" + n : n;
};
