const router = require('express').Router()
const { verifyToken,verifyTokenandAuthorization, verifyTokenandAdmin } =  require('../../verifyToken');
const { createTag, getTags, getTagById, updateTag, deleteTag } = require('./tag.controller');

router.post('/', verifyToken, createTag)
router.get('/', getTags)
router.get('/:id', getTagById)
router.patch('/:id', verifyToken, updateTag)
router.delete('/:id',verifyToken, deleteTag)

module.exports = router