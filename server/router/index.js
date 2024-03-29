const { body } = require('express-validator')
const Router = require('express').Router;
const authMiddleware = require('../middlewares/auth-middleware')
const userController = require('../controllers/user-controllers')
const router = new Router()


router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 20 })
    , userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUser)

module.exports = router