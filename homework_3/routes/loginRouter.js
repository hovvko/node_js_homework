const {Router} = require('express');
const users = require('../db/users');
const loginController = require('../controllers/loginController');
const isLoginFieldImplemented = require('../middleware/isLoginFieldImplemented');

const loginRouter = Router();

loginRouter.get('/', loginController.renderLogin);

loginRouter.post('/', isLoginFieldImplemented, loginController.checkEmail);

module.exports = loginRouter;