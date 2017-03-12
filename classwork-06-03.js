function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArray(length, min, max) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(getRandomNumber(min, max));
    }
    return arr;
}



/*
Строчное и числовое преобразование объекта
 */

var card = {
    kind: "hearts",
    name: "ace",
    points: 11,
    toString : function () {
        return this.name + " of " + this.kind;
    },
    valueOf: function () {
        return this.points;
    }
};

console.log("Строчное и числовое преобразование объекта:");
console.log("Карта " + String(card) + ", количество очков: " + card);



/*
Запись свойства в фунцию как в объект, свойство name
 */

function sum(a, b) {
    return a + b;
}

sum.name1 = "Произвольное имя функции";
sum.name = "Это свойство не перезапишется";
console.log("Свойства функции:");
console.log(sum.name1);
console.log(sum.name);



var arr = getRandomArray(10, -5, 5);
/*
Перебирающие методы массива
 */

//Вернуть массив состоящий из квадратов начального массива
var filteredArr = arr.map(function(item) {
    return item * item;
});
console.log("Начальный массив:");
console.log(arr);
console.log("Массив из квадратов начального массива:");
console.log(filteredArr);

//Найти максимальное значение в массиве

var max = arr.reduce(function(max, elem) {
    return (elem > max) ? elem : max;
}, arr[0]);
console.log("Максимальное значение в начальном массиве:");
console.log(max);



/*
Возведение в степень итеративно и рекурсивно
 */

function power(number, power) {
    var result = 1;
    for (var i = 0; i < power; i++)
        result *= number;
    return result;
}

function powerRec(number, power) {
    if (power === 1)
        return number;
    if (power === 0)
        return 1;

    return number * powerRec(number, power-1);
}



/*
Рассчет производительности итеративной и рекурсивной функции
 */

var init = performance.now();
for (var i = 0; i < 1000000; i++)
    power(2, 30);

var middle = performance.now();

for (var i = 0; i < 1000000; i++)
    powerRec(2, 30);
var end = performance.now();

console.log("Выполнение итеративной функции: " + (middle - init));
console.log("Выполнение рекурсивной функции: " + (end - middle));