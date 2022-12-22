// Старый вариант

// const string = 'qWeRTzxCv';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//     const isEqual = letter === letter.toLowerCase();
//     invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString', invertedString);


// Новый вариант

const changeCase = function (string) {
    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
        const isInLowerCase = letter === letter.toLowerCase();

        invertedString += isInLowerCase
            ? letter.toUpperCase()
            : letter.toLowerCase();
    }
    
    return invertedString;
}

console.log(changeCase('qweRTY'));
console.log(changeCase('mAnGo'));
console.log(changeCase('AjAx'));