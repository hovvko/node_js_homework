function isLoginFieldImplemented(req, res, next) {
    try {
        const {firstName, lastName, email, password, age, city} = req.body;

        if (!firstName.length) {
            throw new Error('First name not implemented');
        }
        if (!lastName.length) {
            throw new Error('Last name not implemented');
        }
        if (!email.length) {
            throw new Error('Email not implemented');
        }
        if (!password.length) {
            throw new Error('Password not implemented');
        }
        if (!age.length) {
            throw new Error('Age not implemented');
        }
        if (!city.length) {
            throw new Error('City not implemented');
        }

        next();

    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = isLoginFieldImplemented;