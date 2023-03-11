const { createUser, getUsers, gerUserById, getUserAllInfoById, updateUser, deleteUser, login } = require('./user.controller')
const router = require('express').Router()
const { verifyToken,verifyTokenandAuthorization, verifyTokenandAdmin } =  require('../../verifyToken');

router.post('/', createUser)
router.get('/', verifyTokenandAdmin, getUsers)
router.get('/:id', gerUserById)
router.get('/userallinfo/:id', getUserAllInfoById)
router.patch('/:id', verifyTokenandAuthorization, updateUser)
router.delete('/:id',verifyTokenandAdmin, deleteUser)
router.post('/login', login)

module.exports = router