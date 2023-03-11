const router = require('express').Router()
const { verifyToken,verifyTokenandAuthorization, verifyTokenandAdmin } =  require('../../verifyToken');
const { createTopic, getTopicById, getTopics, updateTopic, deleteTopic } = require('./topic.controller');

router.post('/', verifyToken, createTopic)
router.get('/', getTopics)
router.get('/:id', getTopicById)
router.patch('/:id', verifyTokenandAdmin, updateTopic)
router.delete('/:id',verifyTokenandAdmin, deleteTopic)

module.exports = router