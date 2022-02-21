const express = require("express");
const app = express();
const {engine} = require("express-handlebars");
const path = require("path");
const {use} = require("express/lib/router");

//1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку з
// усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [];

app.use(express.static(path.join(__dirname, "static")));
app.set("view engine", ".hbs");
app.engine(".hbs", engine({defaultLayout: false}));
app.set("views", path.join(__dirname, "static"));

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/login", (req, res) => {
    const {email} = req.body;
    if (users.length) {
        for (const user of users) {
            if (user.email === email) {
                res.render("notFoundPage");
                return;
            }
        }
    }
    users.push(req.body);
    res.redirect("/users");
    // res.render("users", {users});
})

app.get("/users", (req, res) => {
    const {age, city} = req.query;
    const filteredUsersWithQueryParams = [];
    if (age || city) {
        for (const user of users) {
            if (age === user.age) {
                filteredUsersWithQueryParams.push(user);
            }
            if (city === user.city) {
                if (user.age != age && user.city != city) {
                    filteredUsersWithQueryParams.push(user);
                }
            }
        }
        res.render("users", {users: filteredUsersWithQueryParams});
        return;
    }
    res.render("users", {users});
})

app.get("/users/:id", (req, res) => {
    const {id} = req.params;
    const user = users[id - 1];
    res.render("user", {user});
})

app.use((req, res) => {
    res.render("notFoundPage");
})

app.listen(5200, (err) => {
    if (err) console.log(err);
    console.log("Server has start on PORT: 5200");
})