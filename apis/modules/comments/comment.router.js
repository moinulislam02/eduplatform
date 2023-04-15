const router = require('express').Router()
const { verifyToken,verifyTokenandAuthorization, verifyTokenandAdmin } =  require('../../verifyToken');
const { createComment, getComments, getCommentById, getCommentByUserId, deleteComment } = require('./comment.controller');

router.post('/', verifyToken, createComment)
router.get('/', getComments)
router.get('/:id', getCommentById)
router.get('/user/:uid', verifyToken, getCommentByUserId)
router.delete('/:id',verifyToken, deleteComment)

module.exports = router