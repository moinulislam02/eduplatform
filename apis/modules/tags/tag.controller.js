const {create, getTagById, getTags, updateTag, deleteTag, } = require('./tag.service')

module.exports = {
    createTag: (req,res)=>{
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
                message: "Tag created successfully",
                data: result
            })
        })
    },
    getTagById: (req, res)=>{
        const id = req.params.id;
        getTagById(id, (err, result)=>{
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
                    message: "Tag not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "Tag found",
                data: result
            })
        })
    },
    getTags: (req, res)=>{
        getTags((err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Tags found",
                data: result
            })
        })
    },
    updateTag: (req, res)=>{
        const body = req.body;
        updateTag(body, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Tag updated successfully",
                data: result
            })
        })
    },
    deleteTag: (req, res)=>{
        const data = req.params.id;
        deleteTag(data, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Tag delete successfully"
            })
        })
    }
}