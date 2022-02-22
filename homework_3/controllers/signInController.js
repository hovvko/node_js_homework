const users = require('../db/users');

class SignInController {
    renderSignIn(req, res) {
        res.render('signIn');
    }

    ifDataValidRedirectToUser(req, res) {
        const {email, password} = req.body;

        for (const user of users) {

            if (email === user.email && password === user.password) {
                res.redirect(`/users/${users.indexOf(user)+1}`);
            }

        }
    }
}

module.exports = new SignInController();