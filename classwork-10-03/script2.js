/*
  Чайник из файла script1.js доступен, так как он находится в глобальной области видимости
  и подключен в html-файле раньше
 */
kettle.on();

/*
  Вариант создания объекта Чайник в ограниченной области видимости.
  Обратите внимание, что функции off, on, str недоступны в файле, за пределами
  переменной result.
 */
var result = (function () {
     return {
        volume: 1.7,
        power: 2.5,
        voltage: 220,
        color: "red",
        manufacturer: "Philips",

        on: on,
        off: off,
        toString : str
    };

    function off() {
        alert("Чайник " + this.manufacturer + " цвет " + this.color + " выключен");
    }

    function on() {
        alert("Чайник " + this.manufacturer + " цвет " + this.color + " включен");
    }

    function str() {
        return "Чайник " + this.manufacturer + " цвет " + this.color;
    }
})();

result.on();