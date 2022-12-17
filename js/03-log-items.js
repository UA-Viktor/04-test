// Напиши функцию для перебора и логирования массива

// Этот пример показан для того что бы показать что функция не обязательно 
// должна что то возвращать

const logItems = function (items) {
    for (const item of items) {
        console.log(item);
    }
}
 
logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);

