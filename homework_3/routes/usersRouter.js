const {Router} = require('express');
const users = require('../db/users');
const usersController = require('../controllers/usersController')

const usersRouter = Router();

usersRouter.get('/', usersController.filterWithQueryParams);

usersRouter.get('/:id', usersController.getUserById);

module.exports = usersRouter;