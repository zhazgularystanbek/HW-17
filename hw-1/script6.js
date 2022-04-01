// ЗАДАНИЕ 1.6:

function getDay() {
	return (new Date).getDate();
}

function getMonth() {
	return (new Date).getMonth();
}

function getYear() {
	return (new Date).getFullYear();
}


let arr = [2022];
let [year = getYear(), month = getMonth(), day = getDay()] = arr;

console.log(arr);
console.log(year);
console.log(month);
console.log(day);
