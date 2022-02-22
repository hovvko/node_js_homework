const users = require('../db/users');

class UsersController {

    filterWithQueryParams(req, res) {
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
    }

    getUserById(req, res) {
        const {id} = req.params;
        const user = users[id - 1];

        res.render('user', {user});
    }

}

module.exports = new UsersController();