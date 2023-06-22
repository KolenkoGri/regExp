// Задача 1
    // const items = ['module.jsx', 'index.html', 'style.css', 'index.js', 'file.ts', 'library.css', 'my.plugin.js'];
    // const regExp = /\b\.js|jsx|ts\b/gi;

    // const newItems = () => {
    //     const regItems = items.filter((i) => {
    //         return i.match(regExp);
    //     });
    //     return regItems;
    // };

    // console.log(newItems());

// Задача 2 

// 2. Напишите регулярное выражение, которое находит email адреса:
// До символа @ email может содержать не менее одного символа класса \w.
// После символа @ и до .(точки), после которой начинается домен, может содержать только буквы и быть не короче трех символов.
// После .(точки) может содержать только буквы и быть от 2 до 5 символов в длину.

// Примеры валидные: info@methed.ru, max24@mail.com, java_script@google.io
// Примеры не валидные: my-mail@yandex.ru, tom_yam@ya.ru, zero@mai1.xyz

// В ЭТОМ ЗАДАНИИ 'my-mail@yandex.ru' НЕ ПРОТИВОРЕЧИТ УСЛОВИЯМ, ПОЭТОМУ ВЫВОДИТСЯ

    // const items = ['info@methed.ru', 'max24@mail.com', 'java_script@google.io', 'my-mail@yandex.ru', 'tom_yam@ya.ru', 'zero@mai1.xyz']

    // const regExp = /(\w+)@(\w+)[a-z]{3,}\.(\w+){2,5}/gi;

    // const filterItems = () => {
    //     const regTest = items.filter((i) => {
    //         return i.match(regExp);
    //     }) 
    //     return regTest;
    // }

    // console.log(filterItems());

// ЗАДАЧА 3

// const text = 'Здоровый (праздничный) ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды (по мнению моей мамы) являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты(например: личи, рамбутан, тамаринд). Здоровой может быть даже выпечка, если она приготовлена на пару.';

// const regExp = /\((.*?)\)/g; 

// console.log(text.match(regExp));

// ЗАДАЧА 4

// 4. Напишите функцию которая принимает строку, в этой строке находит url адрес и заменяет с помощью replace на тег
// домены вида http://site.ru, https://site.com на 

// const items = ['http://site.ru', 'https://site.com'];
// const regExp = (/(^\w+:|^)\/\//);

// const newItem = items.map((i) => {
//     i.replace(regExp, (res) => {
//         const newI = i.replace(res, '');
//         i = `<a href="${newI}">${newI}</a>`
//     });
//     return i;
// });

// console.log(newItem);