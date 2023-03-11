const router = require('express').Router()
const { verifyToken,verifyTokenandAuthorization, verifyTokenandAdmin } =  require('../../verifyToken');
const { createEduInfo, getAllEduInfo, getEduInfoById, getEduInfoByUserId, updateEduInfoByUserId, deleteEduInfo } = require('./eduinfo.controller');

router.post('/',verifyToken, createEduInfo)
router.get('/', getAllEduInfo)
router.get('/:id', getEduInfoById)
router.get('/user/:uid', getEduInfoByUserId)
router.patch('/user/:uid', verifyToken, updateEduInfoByUserId)
router.delete('/:id',verifyTokenandAdmin, deleteEduInfo)

module.exports = router