// Старый вариант

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log('smallestNumber', smallestNumber);



// Новый вариант через ФУНКЦИИ

const findSmallestNumber = function (numbers) {
    let smallestNumber = numbers[0];
    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber;
}

console.log(findSmallestNumber([3, 8, 12, -2, 15]));
