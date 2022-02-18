//Завдання на практику
//
// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так
const fs = require("fs");
const path = require("path");

// fs.writeFile(path.join(__dirname, "text.txt"), "SOME DATA", err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     fs.readFile(path.join(__dirname, "text.txt"), (error, data) => {
//         if (error) {
//             console.log(error);
//             throw error;
//         }
//         fs.writeFile(path.join(__dirname, "text2.txt"), data, err => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
//     })
// })


// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell
// fs.writeFile(path.join(__dirname, "transferFile.txt"), "TRANSFER FILE", (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     fs.readFile(path.join(__dirname, "transferFile.txt"), (error, data) => {
//         if (error) {
//             console.log(error);
//             throw error;
//         }
//         fs.mkdir(path.join(__dirname, "testDir"),err => {
//             if (err) {
//                 console.log(err)
//                 throw err
//             }
//         })
//         fs.writeFile(path.join(__dirname, "testDir", "dataFromTransferFile.txt"), data, (dirErr) => {
//             if (dirErr) {
//                 console.log(dirErr);
//                 throw dirErr;
//             }
//         })
//             fs.unlink(path.join(__dirname, "transferFile.txt"), (delFileErr) => {
//                 if (delFileErr) {
//                     console.log(delFileErr);
//                     throw delFileErr;
//                 }
//             })
//     })
// })


//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// fs.mkdir(path.join(__dirname, "testDir", "first"), {recursive: true} , (err => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     fs.writeFile(path.join(__dirname, "testDir", "testFile.txt"), "DATA FILE", (error)=> {
//         if (error) {
//             console.log(error);
//             throw (error);
//         }
//     })
// }))
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані -
// це папки, вам потрібно їх перейменувати і додати до назви префікс _new
// fs.readdir(path.join(__dirname, "testDir"), (err, files) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     if (files.length) {
//         for (let i = 0; i < files.length; i++) {
//             if (path.extname(files[i])) {
//                 fs.truncate(path.join(__dirname, "testDir", files[i]), (error) => {
//                     if (error) {
//                         console.log(error);
//                         throw error;
//                     }
//                 })
//             }
//             if (!path.extname(files[i])) {
//                 fs.rename(path.join(__dirname, "testDir", files[i]), path.join(__dirname, "testDir", `${files[i]}_new`), (err1) => {
//                     if (err1) {
//                         console.log(err1);
//                         throw err1;
//                     }
//                 })
//             }
//         }
//     }
// })






















