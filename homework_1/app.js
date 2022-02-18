//TODO Щоб завдання виконувались послідовно потрібно запускати код почергово до часткового опису
//Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
const fs = require("fs");

const path = require("path");

// fs.mkdir(path.join(__dirname, "main", "online"), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//     }
// })
//
// fs.mkdir(path.join(__dirname, "main", "inPerson"), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//     }
// })


// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// const onlineUsersArr = [{
//     name: "Andrii",
//     age: 22,
//     city: "Lviv"
// }];
//
// const inPersonUsersArr = [{
//     name: "Sergiy",
//     age: 25,
//     city: "London",
// }];
//
// const createFile = (arr, fullPathToDirectory) => {
//     const objKeys = Object.keys(arr[0]);
//
//     fs.writeFile(path.join(fullPathToDirectory, `${arr[0].name}.txt`), "", (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
//
//     for (let i = 0; i < objKeys.length; i++) {
//         fs.appendFile(path.join(fullPathToDirectory, `${arr[0].name}.txt`), `${objKeys[i]}: ${arr[0][objKeys[i]]}\n`, (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
//     }
// }
//
// const pathDir = {
//     onLineUsers: path.join(__dirname, "main", "online"),
//     inPersonUsers: path.join(__dirname, "main", "inPerson")
// }
//
// createFile(onlineUsersArr, pathDir.onLineUsers);
// createFile(inPersonUsersArr, pathDir.inPersonUsers);



// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)
// const pathToFirstUser = path.normalize(`${pathDir.inPersonUsers}/Sergiy.txt`);
// const pathToSecondUser = path.normalize(`${pathDir.onLineUsers}/Andrii.txt`);
//
// const changeDirectory = (pathToFile, pathToNewDirectory) => {
//     fs.rename(pathToFile, pathToNewDirectory,  (err)=> {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//     })
// }
//
// changeDirectory(pathToFirstUser, path.join(__dirname, "main", "online", "Sergiy.txt"));
// changeDirectory(pathToSecondUser, path.join(__dirname, "main", "inPerson", "Andrii.txt"));
































// const changeUsers = (pathToFirstFile, pathToSecondFile)=> {
//     fs.readFile(pathToFirstFile, (err, data) => {
//         if (err) {
//             console.log(err)
//             throw err
//         }
//         return data
//     })
//
//     fs.readFile(pathToSecondFile, (err, data) => {
//         if (err) {
//             console.log(err)
//             throw err
//         }
//     })
// }