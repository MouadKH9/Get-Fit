//Get the average of the week
export function getAvg(data) {
  data = sortObj(data);
  if (isEmpty(data)) return "-";
  data = Object.values(data);
  data = data.slice(getWeekStart(data), data.length);
  let avg = 0;
  for (var i = 0; i < data.length; i++) {
    avg += data[i] / data.length;
  }
  return avg.toFixed(2);
}

//Get the average of last week
export function getLastAvg(data) {
  data = sortObj(data);
  if (isEmpty(data)) return "-";
  data = Object.values(data);
  data = data.slice(
    getWeekStart(data) > 6 ? getWeekStart(data) - 7 : 0,
    getWeekStart(data)
  );
  let avg = 0;
  for (var i = 0; i < data.length; i++) {
    avg += data[i] / data.length;
  }
  return avg.toFixed(2);
}

//Get the difference
export function getDiff(data) {
  if (isEmpty(data) || getLastAvg(data) === "-") return "-";
  if (getLastAvg(data) * getAvg(data) === 0) return "-";
  return (getAvg(data) - getLastAvg(data)).toFixed(2);
}

//Get latest weight
export function getLastValue(data) {
  if (isEmpty(data)) return "-";
  data = sortObj(data);
  data = Object.values(data);
  return data[data.length - 1];
}

// Sort the data obj according to dates
export function sortObj(obj) {
  delete obj.init;
  return Object.keys(obj)
    .sort() // eslint-disable-next-line
    .reduce((a, c) => ((a[c] = obj[c]), a), {});
}

//get the index of the last monday
function getWeekStart(data) {
  let values = Object.values(data);
  if (values.length < 7) return 0;
  for (let i = values.length - 1; i >= 0; i--) {
    let tmpDate = new Date(values[i]);
    if (tmpDate.getDay() === 0) return i + 3;
  }
}

export function getTotal(data) {
  if (isEmpty(data)) return "-";
  return (getAvg(data) - getFirstValue(data)).toFixed(2);
}
export function getTotalAvg(data) {
  if (isEmpty(data)) return "-";
  let first = getFirstValue(data);
  let last = getAvg(data);
  let numOfDays = getNumberOfDays(data);
  console.log(first);
  console.log(last);
  data = Object.values(sortObj(data));
  return ( (first - last) / ( numOfDays / 7) ).toFixed(2);
}
export function getWeeksLeft(data, goal) {
  let current = getAvg(data);
  let avg = getTotalAvg(data);
  if(avg <= 0) return "-";
  let count = 0;
  while (current > goal) {
    current -= avg;
    count++;
  }
  return count;
}
export function getFirstValue(data) {
  data = sortObj(data);
  data = Object.values(data);
  return data[0];
}
export function getProgress(data, goal) {
  return Math.ceil(
    (100 * (getAvg(data) - getFirstValue(data))) / (goal - getFirstValue(data))
  );
}
export function isEmpty(data) {
  return Object.values(data).length === 0;
}

export function getNumberOfDays(data){
  data = Object.keys(sortObj(data));
  let date1 = new Date(data[0]);
  let date2 = new Date(data[data.length - 1]);
  let timeDiff = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}
