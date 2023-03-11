const {create, getTopicById, getTopics, updateTopic, deleteTopic} = require('./topic.service')

module.exports = {
    createTopic: (req,res)=>{
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
                message: "Topic created successfully",
                data: result
            })
        })
    },
    getTopicById: (req, res)=>{
        const id = req.params.id;
        getTopicById(id, (err, result)=>{
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
                    message: "Topic not found"
                })
            }
            return res.status(200).json({
                success: true,
                message: "Topic found",
                data: result
            })
        })
    },
    getTopics: (req, res)=>{
        getTopics((err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Topics found",
                data: result
            })
        })
    },
    updateTopic: (req, res)=>{
        const body = req.body;
        updateTopic(body, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Topic updated successfully",
                data: result
            })
        })
    },
    deleteTopic: (req, res)=>{
        const data = req.params.id;
        deleteTopic(data, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Database connection error: " + err.message
                })
            }
            return res.status(200).json({
                success: true,
                message: "Topic delete successfully"
            })
        })
    }
}