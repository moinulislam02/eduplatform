const { createUser, getUsers, gerUserById, updateUser, deleteUser, login } = require('./user.controller')
const router = require('express').Router()
const { verifyToken,verifyTokenandAuthorization, verifyTokenandAdmin } =  require('../../verifyToken');

router.post('/', createUser)
router.get('/', verifyTokenandAdmin, getUsers)
router.get('/:id', gerUserById)
router.patch('/:id', verifyTokenandAuthorization, updateUser)
router.delete('/:id',verifyTokenandAdmin, deleteUser)
router.post('/login', login)

module.exports = router