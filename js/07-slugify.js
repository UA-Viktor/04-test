// Старый вариант

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');
// // Или
// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);




// Новый вариант

// const slugify = function (string) {
//     const normalizedString = string.toLowerCase();
//     const words = normalizedString.split(' ');
//     const slug = words.join('-');

//     return slug;

// }

// console.log(slugify('Top 10 benefits of React framework'));

// Или

const slugify = function (string) {
    return string.toLowerCase().split(' ').join('-');
}

console.log(slugify('Top 10 benefits of React framework'));