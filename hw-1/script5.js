// ЗАДАНИЕ 1.5:

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];
let [name, surname, department, position = 'джуниор'] = arr;

console.log(name);
console.log(surname);
console.log(department);
console.log(position);