const {create, getPostById, getPostByUserId, getAllPost, updatePostById, deletePost, } = require('./post.service')

module.exports = {
    createPost: (req,res)=>{
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
                message: "Post created successfully",
                data: result
            })
        })
    },
    getPostById: (req, res)=>{
        const id = req.params.id;
        getPostById(id, (err, result)=>{
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
                    message: "Post not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "Post found",
                data: result
            })
        })
    },
    getPostByUserId: (req, res)=>{
        const uid = req.params.uid;
        getPostByUserId(uid, (err, result)=>{
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
                    message: "User post not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "User post found",
                data: result
            })
        })
    },
    getAllpost: (req, res)=>{
        getAllPost((err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Posts found",
                data: result
            })
        })
    },
    updatePostById: (req, res)=>{
        const body = req.body;
        updatePostById(body, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "User post updated successfully",
                data: result
            })
        })
    },
    deletePost: (req, res)=>{
        const data = req.params.id;
        deletePost(data, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Post delete successfully"
            })
        })
    }
}