const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [];

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const {email} = req.body;

    if (users.length) {

        for (const user of users) {

            if (user.email === email) {

                res.render('notFoundPage');
                return;
            }

        }

    }
    users.push(req.body);
    res.redirect('/users');
});

app.get('/users', (req, res) => {
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
        res.render('users', {users: filteredUsersWithQueryParams});
        return;
    }

    res.render('users', {users});
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    const user = users[id - 1];

    res.render('user', {user});
});

app.get('/signIn', (req, res) => {
    res.render('signIn');
});

app.post('/signIn', (req, res) => {
    const {email, password} = req.body;

    for (const user of users) {

        if (email === user.email && password === user.password) {
            res.redirect(`/users/${users.indexOf(user) + 1}`);
            return;
        }

    }

});

app.use((req, res) => {
    res.render('notFoundPage');
});

app.listen(5200, (err) => {
    if (err) console.log(err);

    console.log('Server has start on PORT: 5200');
});