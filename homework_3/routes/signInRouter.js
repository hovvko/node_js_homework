const {Router} = require('express');
const signInController = require('../controllers/signInController');
const isEmail = require('../middleware/isEmail');

const signInRouter = Router();

signInRouter.get('/', signInController.renderSignIn);

signInRouter.post('/', isEmail, signInController.ifDataValidRedirectToUser);

module.exports = signInRouter;