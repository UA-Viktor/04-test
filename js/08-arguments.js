// Старый метод

// const fn = function () {
//     console.log(arguments);
//     const args = Array.from(arguments);
//     console.log(args);
// }


// Новый метод 1
// const fn = function (...args) {
//     console.log(args);
// }

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// Новый метод 2
// const fn = function (a, b, c, ...args) {
//     console.log(`${a}, ${b}, ${c}`);
//     console.log(args);
// }

// fn('hello', 1, 2, 3);






// const add = function (... args) {
//     console.log(args);
//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }

//     return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));





const filterNumbers = function (array, ...args) {
    console.log('array', array);
    console.log('args', args);

    const uniqueElements = [];

    for (const element of array) {
        if (args.includes(element)) {
            uniqueElements.push(element);
            console.log(`${element} есть везде`);
        }
    }

    return uniqueElements;
}


console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));