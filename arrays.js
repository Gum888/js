/*
Проверка на число
 */

function isNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

/*
Генерация массива заданной длины, заполненного числами из заданного диапазона
 */

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
Выбор уникальных значений из массива
 */

//Перебор двумя вложенными циклами
function getUniqueValues(testArr) {
    var result = [],
        testValue,
        isUnique;

    for (var i = 0; i < testArr.length; i++) {
        isUnique = true;
        for (var j = 0; j < testArr.length; j++) {
            if (i === j)
                continue;
            if (testArr[i] === testArr[j]) {
                isUnique = false;
                break;
            }
        }

        if (isUnique)
            result.push(testArr[i]);
    }

    return result;
}


/*
Сортировка массива строк
 */

function sortStringArr(arr) {
    return arr.sort(function (item1, item2) {
        if (isNumber(item1) && isNumber(item2))
            return item1 - item2;
        else
            return item1.toLowerCase() > item2.toLowerCase();
    });
}