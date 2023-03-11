const {create, getAddressById, getAddressByUserId, getAllAddress, updateAddressByUserId, deleteAddress} = require('./address.service')

module.exports = {
    createAddress: (req,res)=>{
        const body = req.body;
        create(body, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Address created successfully",
                data: result
            })
        })
    },
    getAddressById: (req, res)=>{
        const id = req.params.id;
        getAddressById(id, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            if (result.length === 0) {
                return res.status(200).json({
                    success: false,
                    message: "Address not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "Address found",
                data: result
            })
        })
    },
    getAddressByUserId: (req, res)=>{
        const uid = req.params.uid;
        getAddressByUserId(uid, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            if (result.length === 0) {
                return res.status(200).json({
                    success: false,
                    message: "User address not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "User address found",
                data: result
            })
        })
    },
    getAllAddress: (req, res)=>{
        getAllAddress((err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Addresses found",
                data: result
            })
        })
    },
    updateAddressByUserId: (req, res)=>{
        const body = req.body;
        updateAddressByUserId(body, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "User address updated successfully",
                data: result
            })
        })
    },
    deleteAddress: (req, res)=>{
        const data = req.params.id;
        deleteAddress(data, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Address delete successfully"
            })
        })
    }
}