const users = require('../db/users');

function isEmail(req, res, next) {
    try {
        const {email} = req.body;

        for (const user of users) {

            if (user.email === email) {
                next();
                return;
            }

        }

        throw new Error('Wrong email or password');

    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = isEmail;