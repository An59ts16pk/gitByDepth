// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
console.log("   Задание 1");

for (let i = 0; i < 11; i++) {
    if (i === 0) console.log(`${i} - это ноль`);
    else if (i % 2 !== 0) console.log(`${i} - нечётное число`);
    else console.log(`${i} - чётное число`);
}

for (let i = 0; i < 11; i++) {
    i === 0
        ? console.log(`${i} - это ноль`)
        : i % 2 !== 0
        ? console.log(`${i} - нечётное число`)
        : console.log(`${i} - чётное число`);
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
console.log("\n   Задание 2");

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
//     1. Рассчитать сумму элементов этого массива
//     2. Найти минимальное число
//     3. Найти есть ли в этом массиве число 3
console.log("\n   Задание 3");

const arrRandom = Array.from({ length: 5 }, () =>
    Math.floor(Math.random(0, 9) * 10)
);
console.log(arrRandom);

const sum = arrRandom.reduce((acc, el) => acc + el, 0);
console.log(`Вариант 1. Сумма элементов массива = ${sum}`);

let sumArr = 0;
arrRandom.forEach((x) => (sumArr += x));
console.log(`Вариант 2. Сумма элементов массива = ${sumArr}`);

const minValue = Math.min.apply(null, arrRandom);
console.log(`Вариант 1. Минимальное число массива = ${minValue}`);

const minVal = (values) => values.reduce((x, y) => Math.min(x, y));
console.log(`Вариант 2. Минимальное число массива = ${minVal(arrRandom)}`);

let minV = arrRandom.reduce((acc, a) => Math.min(acc, a));
console.log(`Вариант 3. Минимальное число массива = ${minV}`);

const minNum = Math.min(...arrRandom);
console.log(`Вариант 4. Минимальное число массива = ${minNum}`);

let numSerch = arrRandom.indexOf(3) !== -1 ? "есть" : "нет";
console.log(`Число 3 в массиве - ${numSerch}`);

// Задание 4
// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx
console.log("\n   Задание 4");

let str = "";
for (let i = 0; i < 20; i++) {
    console.log((str += "x"));
}
