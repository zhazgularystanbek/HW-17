// ЗАДАНИЕ 1.4:

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [name, surname, ...info] = arr;
console.log(name);
console.log(surname);
console.log(info);
