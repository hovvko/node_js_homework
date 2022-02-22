const users = require('../db/users');

class LoginController {
    renderLogin(req, res) {
        res.render('login');
    }

    checkEmail(req, res) {
        const {email} = req.body;

        if (users.length) {

            for (const user of users) {

                if (user.email === email) {
                    res.send('User with this email already exists');
                    return;
                }

            }

        }

        users.push(req.body);
        res.redirect('/users');
    }
}

module.exports = new LoginController();