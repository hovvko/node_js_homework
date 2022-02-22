const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRoutes);

//написати мідвару чи користувач ввів всі поля на ірл логін якщо не ввів якесь поле то викидати помилку
//та написати мідлвару для signIn чи існує такий емаіл в нашому масиві

app.listen(5200, (err) => {
    if (err) console.log(err);
    console.log('Server has start on PORT: 5200');
})