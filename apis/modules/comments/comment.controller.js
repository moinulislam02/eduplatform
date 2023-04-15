const {create, getCommentById, getAllComments,getCommentByUserId, deleteComment } = require('./comment.service')

module.exports = {
    createComment: (req,res)=>{
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
                message: "Comment created successfully",
                data: result
            })
        })
    },
    getCommentById: (req, res)=>{
        const id = req.params.id;
        getCommentById(id, (err, result)=>{
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
                    message: "Comment not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "Comment found",
                data: result
            })
        })
    },
    getCommentByUserId: (req, res)=>{
        const uid = req.params.uid;
        getCommentByUserId(uid, (err, result)=>{
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
                    message: "User Comment not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "User Comment found",
                data: result
            })
        })
    },
    getComments: (req, res)=>{
        getAllComments((err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Comments found",
                data: result
            })
        })
    },
    deleteComment: (req, res)=>{
        const data = req.params.id;
        deleteComment(data, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Comment delete successfully"
            })
        })
    }
}