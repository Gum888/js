/*
 Объект описывающий чайник

 Параметры чайника:
 объем - литры
 мощность - киловатты,
 напряжение - вольты
 */

var kettle = {
    volume: 2,
    power: 2,
    voltage: 220,
    color: "white",
    manufacturer: "Adidas",

    on: function () {
        alert("Чайник " + this.manufacturer + " цвет " + this.color + " включен");
    },

    off: function () {
        alert("Чайник " + this.manufacturer + " цвет " + this.color + " выключен");
    }
}


/*
 Проверка на високосный год
 */
function isLeapYear(year) {
    var day = new Date(year, 1, 29);
    return day.getDate() === 29;
}


/*
 Рекурсивный расчет факториала
 */
function factorial(n) {
    if (n === 0 || n === 1)
        return 1;
    else if (n > 1) {
        return factorial(n - 1) * n;
    }
}


/*
 Итеративный расчет чисел Фибоначчи
 */

function fibo(n) {
    var current = 1,
        prev = 0,
        temp;

    for (var i = 1; i < n; i++) {
        temp = current;
        current = current + prev;
        prev = temp;
    }

    return current;
}

/*
 Создание функции-счетчика (читайте раздел про Замыкания функции, чтобы разобраться в работе)
 */

function makeCounter() {
    var currentCount = 1;

    return function () {
        return currentCount++;
    };
}

var counter = makeCounter(); // [[Scope]] -> {currentCount: 1}
var counter2 = makeCounter();

// alert(counter()); // 1, [[Scope]] -> {currentCount: 1}
// alert(counter()); // 2, [[Scope]] -> {currentCount: 2}
// alert(counter());
//
// alert(counter2());
// alert(counter2());
