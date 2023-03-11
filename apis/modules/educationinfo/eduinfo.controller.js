const {create, getAllEduInfo, getEduInfoById, getEduInfoByUserId, updateEduInfoByUserId, deleteEduInfo} = require('./eduinfo.service')

module.exports = {
    createEduInfo: (req,res)=>{
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
                message: "Education info created successfully",
                data: result
            })
        })
    },
    getEduInfoById: (req, res)=>{
        const id = req.params.id;
        getEduInfoById(id, (err, result)=>{
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
                    message: "Education info not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "Education info found",
                data: result
            })
        })
    },
    getEduInfoByUserId: (req, res)=>{
        const uid = req.params.uid;
        getEduInfoByUserId(uid, (err, result)=>{
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
                    message: "User eduication info not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "User eduication info found",
                data: result
            })
        })
    },
    getAllEduInfo: (req, res)=>{
        getAllEduInfo((err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Education info found",
                data: result
            })
        })
    },
    updateEduInfoByUserId: (req, res)=>{
        const body = req.body;
        updateEduInfoByUserId(body, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "User education info updated successfully",
                data: result
            })
        })
    },
    deleteEduInfo: (req, res)=>{
        const data = req.params.id;
        deleteEduInfo(data, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Education info successfully"
            })
        })
    }
}