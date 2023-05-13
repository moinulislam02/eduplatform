const router = require('express').Router()
const { verifyToken,verifyTokenandAuthorization, verifyTokenandAdmin } =  require('../../verifyToken');
const { createPost, getAllpost, getPostById, getPostByUserId, updatePostById, deletePost } = require('./post.controller');

router.post('/',verifyToken, createPost)
router.get('/', getAllpost)
router.get('/:id', getPostById)
router.get('/user/:uid', getPostByUserId)
router.patch('/:pid', verifyToken, updatePostById)
router.delete('/:id',verifyToken, deletePost)

module.exports = router