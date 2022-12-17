// Функции
// Аргументы
// Возврат значения

// 1. Обявление

// const fnA = function() {
//     console.log('Выполняется функция A ');
// }

// const fnB = function() {
//     console.log('Выполняется функция B');
// }

// const fnC = function() {
//     console.log('Выполняется функция C');
// }

// 2. Функция return

// const test = function (value) {
//     if (value > 50) {
//         return 'Больше';
//     } else {
//         return 'Меньше';
//     }
// }
// console.log(test(40));


// 3. Отлавить ошибку

const fnA = function() {
    console.log('Выполняется функция A ');
}

const fnB = function() {
    console.log('Выполняется функция B');
    // console.log(value); // Можно отловить что это не вызовится !!!
}

const fnC = function () {
    console.log('Выполняется функция C');
}

fnA();
fnB();
fnC();