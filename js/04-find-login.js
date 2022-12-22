// Напиши функцию для поиска логина
// Если логина нет - сообщение
// Если логин есть - сообщение

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// Было



// const loginToFind = 'poly1scute';

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;

// console.log(message);



// Стало
    //  Вариант 1

// const findLogin = function (allLogins, loginToFind) {
//     let message = `Пользователь ${loginToFind} не найден.`;
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             message = `Пользователь ${loginToFind} найден.`;
//         }
//     }
//     return message;
// }


// Стало
    //  Вариант 2

const findLogin = function (allLogins, loginToFind) {
    return allLogins.includes(loginToFind)
        ? `Пользователь ${loginToFind} найден.`
        :`Пользователь ${loginToFind} не найден.`;
}



console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'afsaf'));
console.log(findLogin(logins, 'k1widasgsdhsab3st'));
console.log(findLogin(logins, 'aj4xth3m4n'));