const router = require('express').Router()
const { verifyToken,verifyTokenandAuthorization, verifyTokenandAdmin } =  require('../../verifyToken');
const { createAddress, getAddressById, getAddressByUserId, getAllAddress, updateAddressByUserId, deleteAddress } = require('./address.controller');

router.post('/',verifyToken, createAddress)
router.get('/', getAllAddress)
router.get('/:id', getAddressById)
router.get('/user/:uid', getAddressByUserId)
router.patch('/user/:uid', verifyToken, updateAddressByUserId)
router.delete('/:id',verifyTokenandAdmin, deleteAddress)

module.exports = router