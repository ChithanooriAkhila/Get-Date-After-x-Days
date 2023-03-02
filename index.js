const addDays = require("date-fns/addDays");
const format = require("date-fns/format");
function date(days) {
  const date = new Date("2020-07-22");
  const dateAfter = addDays(date, days);
  const day = dateAfter.getDate();
  const month = dateAfter.getMonth();
  const year = dateAfter.getFullYear();
  const result = `${day}-${month + 1}-${year}`;
  return result;
}
console.log(date(10));

module.exports = date;
